import web3 from '../web3'
import SmartGift from '../smartgift'

export const Bid = async (completion = (err) => {}) => {
	try {
		const targetGift = SmartGift('0xe7afd832c05f55ed3414df0b0194457fe8b1da65') // Provide GIFT ADDRESS
		const accounts = await web3.eth.getAccounts()
		const bidEntry = await targetGift.methods
			.merchantBids(web3.utils.toWei('0.0172', 'ether')) // Provide BID AMOUNT. 0.019 is the example Bid amount in Ether.
			.send({
				from: accounts[0],
				gas: 1000000
			})
		if (bidEntry.status === "0x0" || !bidEntry.status) {
			console.log("Transaction Failed!!!")
		} else {
			let rawEventData = bidEntry.events["0"].raw.data
			let rawBidData = rawEventData.substr(rawEventData.length - 64)
			let bidDataDecimal = parseInt(rawBidData, 16)
			console.log(`You've bid ${bidDataDecimal} wei on the gift at ${bidEntry.to}`)
			// console.log(bidEntry)
		}
		completion()
	} catch (err) {
		completion(err)
	}
}
