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
			const targetGift = SmartGift('0xd16038d71B68E149B9441dcEEf6C9c8b339701a6') // address of the Gift you're working on
			const accounts = await web3.eth.getAccounts()
			const receiptResult = await targetGift.methods
				.recipientReceivesItem()
				.send({
					from: accounts[0],
					gas: 1000000
				})
			if (receiptResult.status === "0x0" || !receiptResult.status) {
				console.log("Transaction Failed!!!")
			} else {
				console.log(`You've announced your item has been received!`)
				alert('Success!')
			}
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
