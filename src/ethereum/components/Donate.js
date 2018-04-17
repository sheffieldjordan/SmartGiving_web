import React, { Component } from 'react'
import web3 from '../web3'
import factory from '../factory'

class Donate extends Component {
	state = {
		errorMessage: ''
	}

	onSubmit = async (event) => {
		event.preventDefault()
		this.setState({
			errorMessage: ''
		})

		try {
			const accounts = await web3.eth.getAccounts()
			await factory.methods
				.createSmartGift(
					'0x68009930D2E4a9A0A4b53484AED8289c86802Ae5', // Recipient adddress
					1531353600, // exiration time in Unix format
					'DONOR_MSG HERE', // some string
					'5ad4f330b2c368d860b4b011' //example DatabaseId
				)
				.send({
					from: accounts[0],
					value: web3.utils.toWei('0.02', 'ether'), // the 0.02 value will be inputted by the Donor
					gas: 2000000
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
					<button>Donate</button>
				</form>
			</div>
		)
	}
}

export default Donate
