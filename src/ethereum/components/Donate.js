import web3 from '../web3'
import factory from '../factory'
import {objectContainsKeys} from '../../components/Helpers'

export const DonateEthereum = async (ethData, completion) => {
	try {
		const requiredKeys = ['recipientAddress', 'expiry', 'databaseID', 'ether']
		const keyError = objectContainsKeys(ethData, requiredKeys)
		if (keyError !== undefined)  return completion(keyError)

		const accounts = await web3.eth.getAccounts()
		await factory.methods
			.createSmartGift(
				ethData.recipientAddress, // Recipient adddress
				ethData.expiry, // exiration time in Unix format
				'DONOR_MSG HERE', // some string
				ethData.databaseID // DatabaseId
			)
			.send({
				from: accounts[0],
				value: web3.utils.toWei(ethData.ether, 'ether'), // value donated by the donor
				gas: 2000000
			})
		completion()
	} catch (err) {
		if (completion !== undefined) {
			completion(err)
		}
	}
}
