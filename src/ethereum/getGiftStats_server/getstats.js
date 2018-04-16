const factory = require("./files/factory")
const SmartGift = require("./files/smartgift")
const web3 = require("./files/web3")
const path = require("path")
const fs = require("fs-extra")

/* You can run this script in the server. It will query the GiftFactory at the
address found in factory.js. The Factory will return a list of Recipients.
The scripts then iterates over that list and gets a list of a Recipient's Gifts.
It then iterates over that list of Gifts and returns stats on that Gift. For each
Gift, the script creates an Object containing Gift stats and stores that Object
in the databaseObjects array. The array is logged to the console at the end. */

var databaseObjects = []

//gets a list of recipients stored in the GiftFactory then calls getGiftStats()
async function makeArrayOfObjects() {
	const recipientList = await factory.methods.getRecipients().call()
	getGiftsAndStats(recipientList)
}

//gets a list of gifts for every recipient, and then gets stats on each Gift
async function getGiftsAndStats(recipientList) {
	var recipientChecked = []
	var masterGiftList = []
	for (let i = 0; i < recipientList.length; i++) {
		if (recipientChecked.includes(recipientList[i])) {
			continue
		}
		let giftStats = []
		let giftStats2 = []

		recipientChecked.push(recipientList[i])

		var recipientGifts = await factory.methods
			.getGiftsByRecipient(recipientList[i])
			.call()

		// for each Gift, get the stats and store it in an array
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
			// put data from array2 into array1
			giftStats[i][13] = giftStats2[i][0]
			giftStats[i][14] = giftStats2[i][1]
			giftStats[i][15] = giftStats2[i][2]
			giftStats[i][16] = giftStats2[i][3]
			giftStats[i][17] = giftStats2[i][4]

			// convert data to our Schema, and add it to the databaseObjects Array
			databaseObjects.push(
				convertToDatabaseObject(giftStats[i], recipientGifts[i])
			)
		}
	}
	console.log(databaseObjects)
	return databaseObjects
}

// creates an Object using our proposed schema
const convertToDatabaseObject = (ethereumJSON, smartGiftAddress) => {
	let dBJSON = {
		id: 1234, // you get this from DB
		recipient: {
			address: addressCheck(ethereumJSON[0]),
			name: "",
			pic: "",
			about: "",
			challenge: ""
		},
		expiry: timeCheck(ethereumJSON[6]),
		description: ethereumJSON[12],
		items: [{ desc: "", qty: 0, unit: "" }],
		preferredMerchants: [""],
		donor: addressCheck(ethereumJSON[1]),
		maxDonation: parseInt(ethereumJSON[3]),
		recommendedDonation: "",
		startTime: timeCheck(ethereumJSON[8]),
		giftAddress: addressCheck(smartGiftAddress),
		bids: bidsArray(ethereumJSON[13], ethereumJSON[14]),
		updateTime: timeCheck(ethereumJSON[7]),
		selectedMerchant: addressCheck(ethereumJSON[2]),
		finalCost: parseInt(ethereumJSON[5]),
		merchantShipped: ethereumJSON[10],
		timeShipped: timeCheck(ethereumJSON[15]),
		itemReceived: ethereumJSON[11],
		timeReceived: timeCheck(ethereumJSON[16]),
		balance: parseInt(ethereumJSON[17])
	}
	return JSON.stringify(dBJSON)
}

var bidsArray = (merchants, bids) => {
	let merchantArray = []

	for (let i = 0; i < merchants.length; i++) {
		merchantArray.push(
			{
				merchId: addressCheck(merchants[i]), // array of merchant addresses
				bid: parseInt(bids[i]), // array of merchant bids
				merchInfo: {
					name: "",
					location: "",
					about: "",
					pic: ""
				}
			}
		)
	}
	return merchantArray
}

function timeCheck(time) {
	if (time === '0') {
		return ""
	}
	return time
}

function addressCheck(address) {
	if (address === '0x0000000000000000000000000000000000000000') {
		return ""
	}
	return address
}

makeArrayOfObjects()
