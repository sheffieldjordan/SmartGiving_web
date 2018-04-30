import web3 from '../web3'
import SmartGift from '../smartgift'


export const ChooseMerchant = async (completion) => {	
	try {
		const targetGift = SmartGift('0xd16038d71B68E149B9441dcEEf6C9c8b339701a6') // address of the Gift you're working on
		const accounts = await web3.eth.getAccounts()
		const selectionResult = await targetGift.methods
			.recipientPicksMerchant('0xBae217221CbFE934d8e190c8f0A836Cd44a7ed07') // address of merchant that gets selected
			.send({
				from: accounts[0],
				gas: 1000000
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
