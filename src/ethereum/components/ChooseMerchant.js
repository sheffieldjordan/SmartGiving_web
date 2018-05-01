import web3 from '../web3'
import SmartGift from '../smartgift'
import {objectContainsKeys} from '../../components/Helpers'


export const ChooseMerchant = async (ethData, completion) => {	
	try {
		const requiredKeys = ['giftAddress', 'merchantAddress']
		const keyError = objectContainsKeys(ethData, requiredKeys)
		if (keyError !== undefined)  return completion(keyError)

		const targetGift = SmartGift(ethData.giftAddress) // address of the Gift you're working on
		const accounts = await web3.eth.getAccounts()
		const selectionResult = await targetGift.methods
			.recipientPicksMerchant(ethData.merchantAddress) // address of merchant that gets selected
			.send({
				from: accounts[0],
				gas: 2000000
			})
		if (selectionResult.status === "0x0" || !selectionResult.status) {
			const err = new Error ("Transaction returned a bad status")
			completion(err)
			return
		} else {
			console.log(`You've selected and paid the Merchant!`)
		}
		completion()
	} catch (err) {
		completion(err)
	}
}



export default ChooseMerchant
