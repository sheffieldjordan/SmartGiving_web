import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';

import RequestTable from './RequestTable'
import {StringFromLocation} from '../style/Formatter'

class BidDrawer extends Component {

	render() {
		const request = this.props.request
		const itemsTable = (request) => {
			if (request !== undefined && request.inventory !== undefined) {
				return <RequestTable data={request.inventory}/>
			}
			return <div/>
		}

		const location = request === undefined ? undefined : request.charity.location
		return (
		<Drawer anchor="bottom" open={this.props.data.open} onClose={this.props.data.onClose}>
			<div className="drawer-container">
			<h1 className = "drawer-title">Confirm Bid</h1>
				<div className = "drawer-description donate-pre-description">
					By bidding, you promise that if you win, you will ship to the following items to <span className="bid-address">{StringFromLocation(location)}</span>:
				</div>
				<div className = "bid-items-section">
					{itemsTable(this.props.request)}
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
	request: PropTypes.object,
	data: PropTypes.shape({
		open: PropTypes.bool,
		onClose: PropTypes.func,
		onPrimary: PropTypes.func, // When the user hits the primary butotn
		onSecondary: PropTypes.func, // When the user hits the secondary button
	})
}

// WE NEED THIS NOT TO BREAK THE HOMEPAGE
// BidDrawer.defaultProps = {
// 	request: {
// 		items: [],
// 	},
// 	// TODO @Gabe get some default images for here
// }
export default BidDrawer;


