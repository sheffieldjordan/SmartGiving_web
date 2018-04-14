pragma solidity ^0.4.21;

contract GiftFactory {

    address[] public completedGifts;
    address[] public masterGiftList;
    address[] public recipients;
    uint public lastUpdate;

    mapping(address => bool) public giftExists;

    mapping(uint => address) public giftToOwner;

    mapping(address => uint) public recipientGiftCount;
    mapping(address => uint) public donorGiftCount;
    mapping(address => uint) public merchantGiftCount;

    struct Gift {
      address location;
      string donorMsg;
      bool completed;
      uint expiry;
    }

    Gift[] gifts;

    event GiftCreated(address gift, address recipient, uint expiry);
    event DonorSetsPrice(address gift, address donor, uint price);
    event MerchantBids(address gift, address merchant, uint bid);
    event MerchantPaid(address gift, address merchant, uint price); // happens right after Recipient clicks "Select Merchant"
    event ItemShipped(address gift, uint time);
    event ItemDelivered(address gift, uint time);

    function createSmartGift(address _recipient, uint32 _expiry, string _donorMsg) public payable returns(address){
        require(msg.value > 1000000);
        address newGift = (new SmartGift).value(msg.value)(_recipient, msg.sender, _expiry, _donorMsg);
        _updateMasterStats(newGift, msg.sender, _recipient, _expiry, _donorMsg);
        return newGift;
    }

    function createRolloverGift(address _recipient, address _donor, uint32 _expiry, string _donorMsg) external payable returns(address) {
        require(msg.value > 1000000);
        address newGift = (new SmartGift).value(msg.value)(_recipient, _donor, _expiry, _donorMsg);
        _updateMasterStats(newGift, _donor, _recipient, _expiry, _donorMsg);
        return newGift;
    }

    function _updateMasterStats(address _newGift, address _donor, address _recipient, uint32 _expiry, string _donorMsg) internal returns(bool) {
        giftExists[_newGift] = true;
        uint id = gifts.push(Gift(_newGift, _donorMsg, false, _expiry)) - 1;
        giftToOwner[id] = _recipient;
        recipientGiftCount[_recipient]++;
        donorGiftCount[_donor]++;
        recipients.push(_recipient);
        masterGiftList.push(_newGift);
        lastUpdate = now;
    }

    function _updateMerchantStats(address _merchant) internal {
        merchantGiftCount[_merchant]++;
    }

    function checkBalance() public view returns(uint){
        return address(this).balance;
    }
    // functions below enable the Gift to call the Factory Events. Our app will
    // have listeners pointed at the Factory (not at individual Gifts).
    // If you want stats from an individual gift, you can call that gift's
    // getGiftStats( ) function.

    function giftCreated(address _gift, address _owner, uint _expiry) public {
        emit GiftCreated(_gift, _owner, _expiry);
    }

    function merchantBids(address _gift, address _merchant, uint _bid) external {
        lastUpdate = now;
        emit MerchantBids(_gift, _merchant, _bid);
    }

    function merchantPaid(address _gift, address _merchant, uint price) external {
        emit MerchantPaid(_gift, _merchant, price);
        _updateMerchantStats(_merchant);
        lastUpdate = now;
    }

    function itemShipped(address _gift, uint time) external {
        emit ItemShipped(_gift, time);
        lastUpdate = now;
    }

    function itemDelivered(address _gift, uint time) external {
        completedGifts.push(_gift);
        emit ItemDelivered(_gift, time);
        lastUpdate = now;


    }

    function getGiftsByRecipient(address _recipient) external view returns(address[]) {
        address[] memory result = new address[](recipientGiftCount[_recipient]);
        uint counter = 0;
        for (uint i = 0; i < gifts.length; i++) {
            if (giftToOwner[i] == _recipient) {
                result[counter] = gifts[i].location;  //??
                counter++;
            }
        }
        return result;
    }

    function getRecipients() view public returns(address[]){
        return recipients;
    }
}

contract SmartGift {
    address recipient;
    address donor;
    address merchant;
    address[] biddersList;

    uint maxPrice; //= address(this).balance;
    uint lowestBid;
    uint creationTime;
    uint lastUpdate;
    uint timeShipped;
    uint timeReceived;
    uint expiry;
    uint bidderCount;
    uint finalCost;
    uint[] bidList;
    bool itemShipped;
    bool itemDelivered;
    string donorMsg;

    GiftFactory giftFactory;

    mapping(address => uint) public merchantsToBids;
    mapping(uint => address) public bidAmounts;

    modifier recipientOnly() {
        require(msg.sender == recipient);
        _;
    }

    modifier donorOnly() {
        require(msg.sender == donor);
        _;
    }

    function SmartGift(address _owner, address _donor, uint32 _expiry, string _donorMsg) public payable{
        recipient = _owner;
        donor = _donor;
        expiry = _expiry;
        donorMsg = _donorMsg;
        maxPrice = msg.value -1000000;
        creationTime = now;
        giftFactory = GiftFactory(msg.sender);
        recipient.transfer(1000000); // gas money
        giftFactory.giftCreated(address(this), _owner, _expiry);
    }

    function checkBalance() public view returns(uint){
        return address(this).balance;
    }

    function merchantBids(uint _bid) public { // in Web3, the merchant's input must be converted into Wei
        require(_bid > 0);
        require(msg.sender != recipient && msg.sender != donor);
        require(bidAmounts[_bid] == 0x0); // "Sorry, someone has already bid that amount. Try bidding lower. The current lowest bid is ${lowestBid}. Try to beat it!"
        require(finalCost == 0);
        bidAmounts[_bid] = msg.sender;
        if (lowestBid == 0) {
            lowestBid = _bid;
        }
        if (lowestBid > _bid) {
            lowestBid = _bid;
            }
        bidderCount++;
        biddersList.push(msg.sender);
        bidList.push(_bid);
        giftFactory.merchantBids(address(this), msg.sender, _bid);
        merchantsToBids[msg.sender] = _bid;

        lastUpdate = now;
    }

    function recipientPicksMerchant(address _merchant) public recipientOnly {
        require(merchantsToBids[_merchant] > 0);
        merchant = _merchant;
        finalCost = merchantsToBids[merchant];
        merchant.transfer(finalCost);
        giftFactory.merchantPaid(address(this), _merchant, finalCost);

        lastUpdate = now;
    }

    function merchantShipsItem() public {
        require(msg.sender == merchant);
        itemShipped = true;
        giftFactory.itemShipped(address(this), now);
        timeShipped = now;
        lastUpdate = now;
    }

    function recipientReceivesItem() public recipientOnly {
        itemDelivered = true;
        giftFactory.itemShipped(address(this), now);
        timeReceived = now;
        lastUpdate = now;
    }

    function recoverExtra() public donorOnly {
        require(merchant != 0); // if true, merchant payment has been made.
        donor.transfer(address(this).balance);
    }

    function carryOver(address _rolloverRecipient, uint32 _rolloverExpiry, string _donorMsg) public payable donorOnly returns(address){
        require(merchant != 0);
        address newGift = giftFactory.createRolloverGift.value(address(this).balance)(_rolloverRecipient, msg.sender, _rolloverExpiry, _donorMsg);

        return newGift;
    }


    function getGiftStats() public view returns (
        address,
        address,
        address,
        uint,
        uint,
        uint,
        uint,
        uint,
        uint,
        uint,
        bool,
        bool,
        string
        ) {
            return (
                recipient,
                donor,
                merchant,
                maxPrice,
                lowestBid,
                finalCost,
                expiry,
                lastUpdate,
                creationTime,
                bidderCount,
                itemShipped,
                itemDelivered,
                donorMsg
                );
        }
    function getGiftStats2() view public returns(address[], uint[], uint, uint, uint) {
        return (biddersList, bidList, timeShipped, timeReceived, address(this).balance);
    }

    function() public payable{
        return;
    }
}
