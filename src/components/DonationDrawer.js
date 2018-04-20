import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';

import UserAvatar from './UserAvatar';

class DonationDrawer extends Component {

	render() {
		const request = this.props.request
		const dollarsPerEther = 421.0 // TODO: Get this price dynamically
		const donationValue = this.props.donationValue === undefined ? request.dollars : this.props.donationValue
		return (
		<Drawer anchor="bottom" open={this.props.open} onClose={this.props.onClose}>
			<div className="donation-drawer-container">
			<h1 className = "donation-drawer-title">Confirm Donation</h1>
				<div className="donate-avatar-container">
					<div className = "donate-avatar-container">
						<UserAvatar displayName="Donor" />
						<div className = "donate-arrow">&#8680;</div>
						<UserAvatar displayName="Recipient" />
					</div>
				</div>
				<div className = "donate-description donate-pre-description">
				Are you sure you would like to donate ${Math.floor(donationValue).toFixed(2)} ({(donationValue/dollarsPerEther).toFixed(5)} ETH) to {request.charity.title}?
				</div>
				<div className = "donate-description donate-what-happens">
				(Your payment will be processed once a merchant and recipient agree on delivering and receiving your gifts before the expiration date.)
				</div>
				<div className = "donate-button-container">
					<Button className = "donate-button" onClick = {this.props.onPrimary} variant="raised" size="medium" color="primary">Donate</Button>
					<Button className = "donate-button" onClick = {this.props.onSecondary} variant="raised" size="medium" color="default">Cancel</Button>
				</div>
				<div className = "donate-description donate-post-description">
				If you choose to donate, you will be brought to MetaMask where you can complete your donation.
				</div>

			</div>
		</Drawer>

		)
	}
}

DonationDrawer.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
	onPrimary: PropTypes.func, // When the user hits the primary butotn
	onSecondary: PropTypes.func, // When the user hits the secondary button

	request: PropTypes.object,
	price: PropTypes.number,
	sender: PropTypes.object,
	recipient: PropTypes.object,
}

// WE NEED THIS NOT TO BREAK THE HOMEPAGE
DonationDrawer.defaultProps = {
	request: {
		charity: {
			title: "SAMPLE CHARITY"
		},
		dollars: 15.0,
	},
	// TODO @Gabe get some default images for here
}
export default DonationDrawer;


