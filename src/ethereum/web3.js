/*
This tells the DApp how to interact with the Network
*/

import Web3 from 'web3'
// const Web3 = require('web3')

// let web3 = new Web3(window.web3.currentProvider)

let web3

// if this runs we are in the browser and metamask is running
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
	web3 = new Web3(window.web3.currentProvider)
} else {
	/* if this runs, we are on the server *OR* the user is not running metamask
  we set up our own provider through infura */
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/0EQx7uotOUUoAlWuNWHq'
	)
	web3 = new Web3(provider)
}

export default web3
// module.exports = web3
