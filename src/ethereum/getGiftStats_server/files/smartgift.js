/* Pass this a SmartGift address to enable querying stats on a deployed SmartGift
from within the DApp*/
const web3 = require('./web3')
const SmartGift = require('../../build/SmartGift.json')

module.exports = (address) => {
	return new web3.eth.Contract(JSON.parse(SmartGift.interface), address)
}
