/* This file exists so the DApp can get access to our deployed instance of giftFactory
without having to import web3 into a Component everytime or something */

const web3 = require("./web3")
const GiftFactory = require("../../build/GiftFactory.json")

const factoryInstance = new web3.eth.Contract(
	JSON.parse(GiftFactory.interface),
	"0x92778Af33327c6aE6b226768E2a705937C782fCb" // there's Gift Factory deployed on Rinkeby at this address
)

module.exports = factoryInstance
