import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Drawer, Button, TextField, FormControl, FormHelperText} from 'material-ui';

import RequestTable from './RequestTable'
import {StringFromLocation, WeiToEther} from '../style/Formatter'
import {isObjectEmpty} from '../components/Helpers'

class BidDrawer extends Component {
	constructor(props) {
		super(props)
		this.state = {"bid" : props.bid}
	}
	render() {
		const charity = this.props.charity
		const gift = isObjectEmpty(charity) ? undefined : this.props.charity.gifts[0]

		const itemsTable = (g) => {
			if (g !== undefined && g.items !== undefined) {
				return <RequestTable	titles = {["Item", "Quantity", "Price per unit"]}
										keys= {["itemDescription", "quantity", "pricePerUnit"]}
										data={gift.items}/>
			}
			return <div/>
		}
		const updateCurrentBid = (event) => {
			const n = event.target.value
			this.setState({bid:n})
		}
		const currentBid = () => {
			if (this.state.bid === -1 && gift !== undefined) {
				return WeiToEther(gift.donorDonationAmt)
			}
			return this.state.bid
		}

		const location = charity === undefined ? undefined : charity.location

		return (
		<Drawer anchor="bottom" open={this.props.data.open} onClose={this.props.data.onClose}>
			<div className="drawer-container">
			<h1 className = "drawer-title">Confirm Bid</h1>
				<div className = "drawer-description donate-pre-description">
					By bidding, you promise that if you win, you will ship to the following items to <span className="bid-address">{StringFromLocation(location)}</span>:
				</div>
				<div className = "bid-items-section">
					{itemsTable(gift)}
				</div>
				<div className = "bid-entry-container">
					<FormControl>
						<TextField required={true} InputProps={{classes: {root:"donation-text-field"}}} value={currentBid()} onChange={updateCurrentBid}/>
						<FormHelperText>Enter your bid amount in ETH</FormHelperText>
					</FormControl>

				</div>
				<div className = "drawer-button-container">
					<Button className = "drawer-button" onClick = {this.props.data.onPrimary} variant="raised" size="medium" color="primary">Bid</Button>
					<Button className = "drawer-button" onClick = {this.props.data.onSecondary} variant="raised" size="medium" color="default">Cancel</Button>
				</div>
				<div className = "drawer-description donate-post-description">
				If you choose to bid, you will be brought to MetaMask where you will have to pay a small transaction (under $1.00 USD) fee to complete your bid.
				</div>
			</div>
		</Drawer>

		)
	}
}



BidDrawer.propTypes = {
	charity: PropTypes.object,
	data: PropTypes.shape({
		open: PropTypes.bool,
		onClose: PropTypes.func,
		onPrimary: PropTypes.func, // When the user hits the primary butotn
		onSecondary: PropTypes.func, // When the user hits the secondary button
	})
}

export default BidDrawer;


