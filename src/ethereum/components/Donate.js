import web3 from '../web3'
import factory from '../factory'

export const DonateEthereum = async (completion) => {
	try {
	const accounts = await web3.eth.getAccounts()
	const giftInstance = await factory.methods
		.createSmartGift(
			'0x68009930D2E4a9A0A4b53484AED8289c86802Ae5', // Recipient adddress
			1531353600, // exiration time in Unix format
			'DONOR_MSG HERE', // some string
			'5ad4f330b2c368d860b4b012' //example DatabaseId
		)
		.send({
			from: accounts[0],
			value: web3.utils.toWei('0.02', 'ether'), // the 0.02 value will be inputted by the Donor
			gas: 3000000
		})
		if (giftInstance.status === "0x0") {
			console.log("Transaction Failed")
		} else {
			console.log(`You've created a gift at address: ${giftInstance.events.GiftCreated.returnValues["0"]}`)
		}
		completion()
	} catch (err) {
		if (completion !== undefined) {
			completion(err.message)
		}
	}
}
