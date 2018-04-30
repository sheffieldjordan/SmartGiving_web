import web3 from '../web3'
import SmartGift from '../smartgift'
import {objectContainsKeys} from '../../components/Helpers'

export const Bid = async (ethData, completion = (err) => {}) => {
	try {
		const requiredKeys = ['databaseID', 'ether']
		const keyError = objectContainsKeys(ethData, requiredKeys)
		if (keyError !== undefined)  return completion(keyError)

		const targetGift = SmartGift(ethData.bidAddress) // Provide GIFT ADDRESS
		const accounts = await web3.eth.getAccounts()
		const bidEntry = await targetGift.methods
			.merchantBids(web3.utils.toWei(ethData.ether, 'ether')) // Provide BID AMOUNT
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
