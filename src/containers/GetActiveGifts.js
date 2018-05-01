import React, { Component } from "react";
import axios from "axios";
import style from "../style/GetActiveGiftsStyle";
import { GetAllOpenGifts, GetAllMerchants } from "../backend/APIManager";

class GetActiveGifts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      ethDonorAddress: "",
      ethMerchantAddress: "",
      ethRecipientAddr: "",
      description: "",
      expiry: "",
      suggDonationAmt: 0,
      creationDate: "",
      itemDescription: "",
      quantity: 0,
      pricePerUnit: 0,
      itemDescription2: "",
      quantity2: 0,
      pricePerUnit2: 0
    };
    this.handleDonorEthAddrChange = this.handleDonorEthAddrChange.bind(this);
    this.handleMerchantEthAddrChange = this.handleMerchantEthAddrChange.bind(
      this
    );
    this.handleRecipientEthAddrChange = this.handleRecipientEthAddrChange.bind(
      this
    );
    this.handleAddDonor = this.handleAddDonor.bind(this);
    this.handleAddMerchant = this.handleAddMerchant.bind(this);
    this.handleAddRecipient = this.handleAddRecipient.bind(this);
    this.handleRecipientGiftAdd = this.handleRecipientGiftAdd.bind(this);
    this.handleUpdateDB = this.handleUpdateDB.bind(this);
    this.handleGetMerchants = this.handleGetMerchants.bind(this);
    this.handleDonorSubmit = this.handleDonorSubmit.bind(this);
    this.handleGetRecipients = this.handleGetRecipients.bind(this);
    this.handleMerchantSubmit = this.handleMerchantSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleExpiryChange = this.handleExpiryChange.bind(this);
    this.handleSuggDonationAmtChange = this.handleSuggDonationAmtChange.bind(
      this
    );
    this.handleItemDescriptionChange = this.handleItemDescriptionChange.bind(
      this
    );
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handlePricePerUnitChange = this.handlePricePerUnitChange.bind(this);
    this.handleItemDescriptionChange2 = this.handleItemDescriptionChange2.bind(
      this
    );
    this.handleQuantityChange2 = this.handleQuantityChange2.bind(this);
    this.handlePricePerUnitChange2 = this.handlePricePerUnitChange2.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleGetRecipients(e) {
    e.preventDefault();
    // console.log(ethereumAddress);

    const completion = (data, err) => {
      if (err !== undefined) {
        console.log(err);
      } else {
        console.log("inside Donor GetActiveGifts", data);
        this.setState({
          data: data
        });
      }
    };
    GetAllOpenGifts(completion);
  }

  handleUpdateDB(e) {
    e.preventDefault();
    axios
      .get(`/api/updateDB`)
      .then(res => {
        console.log("Back GetActiveGifts from req Morgan", res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });

    // const completion = (data, err) => {
    //   if (err !== undefined) {
    //     console.log(err);
    //   } else {
    //     console.log("inside Donor GetActiveGifts", data);
    //     this.setState({
    //       data: data
    //     });
    //   }
    // };
    // GetAllOpenGifts(completion, ethereumAddress);
  }

  //////NOT IMPLEMENTED IN PROJECT WITH GABE////////
  handleDonorSubmit(e) {
    e.preventDefault();
    let ethereumAddress = this.state.ethMerchantAddress.trim();
    // console.log(ethereumAddress);

    const completion = (data, err) => {
      if (err !== undefined) {
        console.log(err);
      } else {
        console.log("inside Donor GetActiveGifts", data);
        this.setState({
          data: data
        });
      }
    };
    GetAllOpenGifts(completion, ethereumAddress);
  }
  handleGetMerchants(e) {
    e.preventDefault();
    const completion = (data, err) => {
      if (err !== undefined) {
        console.log(err);
      } else {
        console.log("inside Donor GetActiveGifts", data);
        this.setState({
          data: data
        });
      }
    };
    GetAllMerchants(completion);
  }

  handleMerchantSubmit(e) {
    e.preventDefault();
    let ethereumAddress = this.state.ethMerchantAddress.trim();
    // console.log(ethereumAddress);

    axios
      // .get(`/api/merchant_${ethereumAddress}/activeGiftsList`)
      .get(`/api/${ethereumAddress}/activeMerchantGiftsList`)
      .then(res => {
        console.log("inside Merchant GetActiveGifts", res.data);
        this.setState({
          // listToShow: "gifts",
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleRecipientGiftAdd(e) {
    e.preventDefault();

    let item1 = {
      itemDescription: this.state.itemDescription,
      quantity: this.state.quantity,
      pricePerUnit: this.state.pricePerUnit
    };
    let item2 = {
      itemDescription: this.state.itemDescription2,
      quantity: this.state.quantity2,
      pricePerUnit: this.state.pricePerUnit2
    };
    let gift = {
      ethRecipientAddr: this.state.ethRecipientAddr,
      description: this.state.description,
      expiry: this.state.expiry,
      suggDonationAmt: this.state.suggDonationAmt,
      creationDate: Date.now(),
      items: [item1, item2]
    };
    axios
      .put(`/api/addGift`, gift)
      .then(res => {
        console.log("inside Merchant GetActiveGifts", res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleAddRecipient(e) {
    e.preventDefault();

    let recipient = {
      title: "req.body.title",
      contact_name: "req.body.contact_name",
      about: "req.body.about",
      email: "req.body.email",
      location: "req.body.location",
      website: "req.body.website",
      facebook: "req.body.facebook",
      instagram: "req.body.instagram",
      twitter: "req.body.twitter",
      ethRecipientAddr: "req.body.ethRecipientAddr",
      image: "req.body.image"
    };
    axios
      .put(`/api/addRecipient`, recipient)
      .then(res => {
        console.log("Back in GetActiveGifts from Add Recipient", res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleAddDonor(e) {
    e.preventDefault();

    let donor = {
      ethDonorAddr: "req.body.ethDonorAddr",
      name: "req.body.name",
      email: "req.body.email"
    };
    axios
      .put(`/api/addDonor`, donor)
      .then(res => {
        console.log("Back in GetActiveGifts from Add Donor", res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleAddMerchant(e) {
    e.preventDefault();

    let merchant = {
      ethMerchantAddr: "req.body.ethMerchantAddr",
      name: "req.body.name",
      email: "req.body.email",
      location: "req.body.location",
      storeDescription: "req.body.storeDescription",
      photo: "req.body.photo",
      minShipment: "req.body.minShipment",
      maxShipment: "req.body.maxShipment"
    };
    axios
      .put(`/api/addMerchant`, merchant)
      .then(res => {
        console.log("Back in GetActiveGifts from Add Merchant", res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleDonorEthAddrChange(e) {
    this.setState({ ethDonorAddress: e.target.value });
  }
  handleMerchantEthAddrChange(e) {
    this.setState({ ethMerchantAddress: e.target.value });
  }

  handleRecipientEthAddrChange(e) {
    this.setState({ ethRecipientAddr: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handleExpiryChange(e) {
    this.setState({ expiry: e.target.value });
  }
  handleSuggDonationAmtChange(e) {
    this.setState({ suggDonationAmt: e.target.value });
  }
  handleQuantityChange(e) {
    this.setState({ quantity: e.target.value });
  }
  handleItemDescriptionChange(e) {
    this.setState({ itemDescription: e.target.value });
  }
  handlePricePerUnitChange(e) {
    this.setState({ pricePerUnit: e.target.value });
  }
  handleQuantityChange2(e) {
    this.setState({ quantity2: e.target.value });
  }
  handleItemDescriptionChange2(e) {
    this.setState({ itemDescription2: e.target.value });
  }
  handlePricePerUnitChange2(e) {
    this.setState({ pricePerUnit2: e.target.value });
  }

  render() {
    return (
      <div>
        <form style={style.recipientForm} onSubmit={this.handleDonorSubmit}>
          <input
            type="text"
            placeholder="Enter the Donor Ethereum address"
            style={style.recipientFormDescription}
            value={this.state.ethDonorAddress}
            onChange={this.handleDonorEthAddrChange}
          />
          <button>Get Donor ActiveGifts</button>
        </form>
        <p />
        <hr />
        <p />
        <form style={style.recipientForm} onSubmit={this.handleMerchantSubmit}>
          <input
            type="text"
            placeholder="Enter the Merchant Ethereum address"
            style={style.recipientFormDescription}
            value={this.state.ethMerchantAddress}
            onChange={this.handleMerchantEthAddrChange}
          />
          <button>Get Merchant ActiveGifts</button>
        </form>
        <hr />
        <p />
        <form onSubmit={this.handleRecipientGiftAdd}>
          <input
            type="text"
            placeholder="Enter the Recipient Ethereum address (Not to be asked, but passed from client)"
            style={style.recipientFormDescription}
            value={this.state.ethRecipientAddr}
            onChange={this.handleRecipientEthAddrChange}
          />
          <input
            type="text"
            placeholder="Add Gift's Description..."
            style={style.recipientFormOrgName}
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input
            type="text"
            placeholder="Add Gift's expiration Date (mm/dd/yyyy)"
            style={style.recipientFormRepresentative}
            value={this.state.expiry}
            onChange={this.handleExpiryChange}
          />
          <input
            type="number"
            placeholder="Add Gift's suggested donation amount..."
            style={style.recipientFormDescription}
            value={this.state.suggDonationAmt}
            onChange={this.handleSuggDonationAmtChange}
          />
          <hr width="50%" size="8" align="center" />
          <div style={style.row}>
            <div style={style.column}>
              <input
                type="text"
                placeholder="Add Item's description"
                style={style.recipientFormOrgName}
                value={this.state.itemDescription}
                onChange={this.handleItemDescriptionChange}
              />
              <input
                type="number"
                placeholder="Add number of Items"
                style={style.recipientFormRepresentative}
                value={this.state.quantity}
                onChange={this.handleQuantityChange}
              />
              <input
                type="number"
                placeholder="Add Price per Unit"
                style={style.recipientFormRepresentative}
                value={this.state.pricePerUnit}
                onChange={this.handlePricePerUnitChange}
              />
            </div>
            <div style={style.column}>
              <input
                type="text"
                placeholder="Add Item's description"
                style={style.recipientFormOrgName}
                value={this.state.itemDescription2}
                onChange={this.handleItemDescriptionChange2}
              />
              <input
                type="number"
                placeholder="Add number of Items"
                style={style.recipientFormRepresentative}
                value={this.state.quantity2}
                onChange={this.handleQuantityChange2}
              />
              <input
                type="number"
                placeholder="Add Price per Unit"
                style={style.recipientFormRepresentative}
                value={this.state.pricePerUnit2}
                onChange={this.handlePricePerUnitChange2}
              />
            </div>
            <input
              type="submit"
              style={style.recipientFormPost}
              value="Add Gift"
            />
          </div>
        </form>
        <hr />
        <form onSubmit={this.handleUpdateDB}>
          <div>
            <input
              type="submit"
              style={style.recipientFormPost}
              value="Update DB"
            />
          </div>
        </form>
        <form onSubmit={this.handleGetRecipients}>
          <div>
            <input
              type="submit"
              style={style.recipientFormPost}
              value="Get Recipients"
            />
          </div>
        </form>
        <form onSubmit={this.handleGetMerchants}>
          <div>
            <input
              type="submit"
              style={style.recipientFormPost}
              value="Get Merchants"
            />
          </div>
        </form>
        <hr />
        <form onSubmit={this.handleAddRecipient}>
          <div>
            <input
              type="submit"
              style={style.recipientFormPost}
              value="Add Recipient"
            />
          </div>
        </form>
        <form onSubmit={this.handleAddDonor}>
          <div>
            <input
              type="submit"
              style={style.recipientFormPost}
              value="Add Donor"
            />
          </div>
        </form>
        <form onSubmit={this.handleAddMerchant}>
          <div>
            <input
              type="submit"
              style={style.recipientFormPost}
              value="Add Merchant"
            />
          </div>
        </form>
        <div>{JSON.stringify(this.state.data)}</div>
      </div>
    );
  }
}

export default GetActiveGifts;
