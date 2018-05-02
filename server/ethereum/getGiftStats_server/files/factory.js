/* This file exists so the DApp can get access to our deployed instance of giftFactory
without having to import web3 into a Component everytime or something */

const web3 = require("./web3")
const GiftFactory = require("../../build/GiftFactory.json")

const factoryInstance = new web3.eth.Contract(
	JSON.parse(GiftFactory.interface),
	"0x427649b8205861f0b13cef19ac8daab3d97e9ba2" // there's Gift Factory deployed on Rinkeby at this address
)

module.exports = factoryInstance
