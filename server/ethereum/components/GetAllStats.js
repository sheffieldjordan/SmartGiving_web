import React, { Component } from 'react'
import factory from '../factory'
import SmartGift from '../smartgift'

class GetAllStats extends Component {
	static async getInitialProps() {
		/* creates an array of the Gifts Addresses for Receipient 0xfaa7541...*/

		var databaseObjectArray = []
		const recipientList = await factory.methods.getRecipients().call()
		console.log(`RECIPIENTS LIST: ${recipientList}`)

		async function getGiftsAndStats(recipientList) {
			var recipientChecked = []
			const converToDatabaseObject = (ethereumJSON, smartGiftAddress) => {
				let dBJSON = {
					recipient: {
						address: ethereumJSON[0],
						name: '',
						pic: '',
						about: '',
						challenge: ''
					},
					expiry: ethereumJSON[6],
					description: ethereumJSON[12],
					items: [JSON.stringify({ desc: '', qty: 0, unit: '' })],
					preferredMerchants: [''],
					donor: ethereumJSON[1],
					maxDonation: ethereumJSON[3],
					recommendedDonation: 0,
					startTime: ethereumJSON[8],
					giftAddress: smartGiftAddress,
					bids: bidsArray(ethereumJSON[13], ethereumJSON[14]),
					updateTime: ethereumJSON[7],
					selectedMerchant: ethereumJSON[2],
					finalCost: ethereumJSON[5],
					merchantShipped: ethereumJSON[10],
					timeShipped: ethereumJSON[15],
					itemReceived: ethereumJSON[11],
					timeReceived: ethereumJSON[16],
					balance: ethereumJSON[17]
				}
				return dBJSON
			}

			for (let i = 0; i < recipientList.length; i++) {
				if (recipientChecked.includes(recipientList[i])) {
					continue
				}
				recipientChecked.push(recipientList[i])
				var recipientGifts = await factory.methods
					.getGiftsByRecipient(recipientList[i])
					.call()

				var bidsArray = (merchants, bids) => {
					let merchantArray = []

					for (let i = 0; i < merchants.length; i++) {
						merchantArray.push(
							JSON.stringify({
								merchId: merchants[i], // array of merchant addresses
								bid: bids[i], // array of merchant bids
								merchInfo: JSON.stringify({
									name: '',
									location: '',
									about: '',
									pic: ''
								})
							})
						)
					}
					return merchantArray
				}

				let giftStats = []
				let giftStats2 = []

				for (let i = 0; i < recipientGifts.length; i++) {
					giftStats.push(
						await SmartGift(recipientGifts[i])
							.methods.getGiftStats()
							.call()
					)
					giftStats2.push(
						await SmartGift(recipientGifts[i])
							.methods.getGiftStats2()
							.call()
					)

					giftStats[i][13] = giftStats2[i][0]
					giftStats[i][14] = giftStats2[i][1]
					giftStats[i][15] = giftStats2[i][2]
					giftStats[i][16] = giftStats2[i][3]
					giftStats[i][17] = giftStats2[i][4]

					databaseObjectArray.push(
						converToDatabaseObject(giftStats[i], recipientGifts[i])
					)
				}
			}
			console.log(databaseObjectArray)
			return databaseObjectArray
		}

		getGiftsAndStats(recipientList)

		return {}
	}
	renderRow() {
		return <p />
	}

	render() {
		return <div>Running getGiftsAndStats( )</div>
	}
}

export default GetAllStats
