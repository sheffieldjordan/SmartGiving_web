/*
Run this whenever you change the Smartgiving contract
Deletes the entire Build folder
Read 'Smartiving.sol' from the contracts folder
Compile GiftFactory and SmartGift with solidity compiler
Write the output to the Build folder
*/
const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const smartgivingPath = path.resolve(__dirname, 'contracts', 'SmartGiving.sol')
const source = fs.readFileSync(smartgivingPath, 'utf8')
const output = solc.compile(source, 1).contracts

fs.ensureDirSync(buildPath) // if the folder doesn't exist, create it
// console.log(output)
for (let contract in output) {
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':', '') + '.json'),
		output[contract]
	)
}
