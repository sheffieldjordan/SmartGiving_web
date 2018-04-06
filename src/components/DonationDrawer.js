import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';

import UserAvatar from './UserAvatar';

class DonationDrawer extends Component {

	render() {
		return (
		<Drawer anchor="bottom" open={this.props.open} onClose={this.props.onClose}>
			<div className="donation-drawer-container">
			<h1 className = "donation-drawer-title">Confirm Donation</h1>
				<div className="donate-avatar-container">
					<div className = "donate-avatar-container">
						<UserAvatar displayName="Donor" />
						<div>&#8594;</div>
						<UserAvatar displayName="Recipient" />
					</div>
				</div>
				<div className = "donate-pre-description">
				Are you sure you would like to donate $15.00 (0.0026 ETH) to Save the Frogs for one pair of rainboots?
				</div>
				<div className = "donate-button-container">
					<Button className = "donate-button" onClick = {this.props.onPrimary} variant="raised" size="medium" color="primary">Donate</Button>
					<Button className = "donate-button" onClick = {this.props.onSecondary} variant="raised" size="medium" color="default">Cancel</Button>
				</div>
				<div className = "donate-post-description">
				If you choose to donate, you will be brought to MetaMask where you can complete your donation.
				</div>

			</div>
		</Drawer>

		)
	}
}

export default DonationDrawer;


