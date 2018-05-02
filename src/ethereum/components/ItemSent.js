import web3 from '../web3'
import SmartGift from '../smartgift'
import {objectContainsKeys} from '../../components/Helpers'

export const ItemSent = async (ethData, completion) => {
	try {

		const requiredKeys = ['giftAddress']
		const keyError = objectContainsKeys(ethData, requiredKeys)
		if (keyError !== undefined)  return completion(keyError)

		const targetGift = SmartGift(ethData.giftAddress) // address of the Gift you're working on
		const accounts = await web3.eth.getAccounts()
		const sentResult = await targetGift.methods.merchantShipsItem().send({
			from: accounts[0],
			gas: 2000000
		})
		if (sentResult.status === "0x0" || !sentResult.status) {
			const err = new Error("Item Sent transaction failed")
			return completion(err)
		} else {
			console.log(`You've announced that your item has been sent!`)
			return completion()
		}
	} catch (err) {
		completion(err)
	}
}
