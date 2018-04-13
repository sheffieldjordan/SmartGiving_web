/* If you try to deploy and get 'unhandled promise rejection warning', try
increasing the gas costs. I started at 1000000 */

const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const compiledFactory = require('./build/GiftFactory.json')

const provider = new HDWalletProvider(
	'xxx',
	'https://rinkeby.infura.io/0EQx7uotOUUoAlWuNWHq'
)
const web3 = new Web3(provider)

const deploy = async () => {
	const accounts = await web3.eth.getAccounts()
	console.log('Deploying GiftFactory from account', accounts[0])
	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: '2000000', from: accounts[0] })

	console.log(compiledFactory.interface)
	console.log('SmartGift Factory deployed to', result.options.address)
}
deploy()
// 0xA61218A1A54466b36854d6E7b675125F27AE45Fb
