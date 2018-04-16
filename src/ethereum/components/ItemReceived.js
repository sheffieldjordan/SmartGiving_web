import React, { Component } from 'react'
import web3 from '../web3'
import SmartGift from '../smartgift'

class ItemReceived extends Component {
	state = {
		errorMessage: ''
	}

	onSubmit = async (event) => {
		event.preventDefault()

		try {
			const targetGift = SmartGift('0xF861bbf557eFbb092D48365912dA3b1b64af515d') // address of the Gift you're working on
			const accounts = await web3.eth.getAccounts()
			const itemReceived = await targetGift.methods
				.recipientReceivesItem()
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
					<button>Mark Item 'RECEIVED'</button>
				</form>
				<h1>{this.state.errorMessage}</h1>
			</div>
		)
	}
}

export default ItemReceived
