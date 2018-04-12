/* Pass this a SmartGift address to enable querying stats on a deployed SmartGift 
from within the DApp*/

import web3 from './web3'
import SmartGift from './build/SmartGift.json'

export default (address) => {
	return new web3.eth.Contract(JSON.parse(SmartGift.interface), address)
}
