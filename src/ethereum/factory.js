/* This file exists so the DApp can get access to our deployed instance of giftFactory
without having to import web3 into a Component everytime or something */

import web3 from './web3'
import GiftFactory from './build/GiftFactory.json'

const factoryInstance = new web3.eth.Contract(
	JSON.parse(GiftFactory.interface),
	'0xc256a2AAB064844358e341EB2D5cf62383904A9a' // there's Gift Factory deployed on Rinkeby at this address
)

export default factoryInstance
