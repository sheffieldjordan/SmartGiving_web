import React, { Component } from 'react'
import web3 from '../web3'
import SmartGift from '../smartgift'

class SelectMerchant extends Component {
	state = {
		errorMessage: ''
	}

	onSubmit = async (event) => {
		event.preventDefault()

		try {
			const targetGift = SmartGift('0xF861bbf557eFbb092D48365912dA3b1b64af515d') // address of the Gift you're working on
			const accounts = await web3.eth.getAccounts()
			const selectMerchant = await targetGift.methods
				.recipientPicksMerchant('0x038740aE426fa19758f6B77E7A92d4F4169e1772') // address of merchant that gets selected
				.send({
					from: accounts[0],
					gas: 1000000
				})
			alert('Success!')
		} catch (err) {
			this.setState({ errorMessage: err.message })
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<button>Select Merchant</button>
				</form>
				<h1>{this.state.errorMessage}</h1>
			</div>
		)
	}
}

export default SelectMerchant
