import React, { Component } from "react"
import PropTypes from "prop-types"

import Drawer from "material-ui/Drawer"
import Button from "material-ui/Button"

import UserAvatar from "./UserAvatar"
import { DollarsToEther } from "../style/Formatter"
import price from "crypto-price"

class DonationDrawer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ethRate: ""
		}
	}

	componentDidMount() {
		const request =
			this.props.charity.gifts !== undefined ? this.props.charity.gifts[0] : {}
		const donationValue =
			this.props.donationValue === undefined
				? request.dollars
				: this.props.donationValue
		price
			.getCryptoPrice("USD", "ETH")
			.then((obj) => {
				var etherCut = parseFloat(obj.price).toFixed(2)
				var rate = donationValue / etherCut
				this.setState({ ethRate: rate.toFixed(3) })
			})
			.catch((err) => {
				console.log(err)
			})
	}

	render() {
		const request =
			this.props.charity.gifts !== undefined ? this.props.charity.gifts[0] : {}
		const charity = this.props.charity
		const donationValue =
			this.props.donationValue === undefined
				? request.dollars
				: this.props.donationValue

		return (
			<Drawer
				anchor="bottom"
				open={this.props.data.open}
				onClose={this.props.data.onClose}
			>
				<div className="drawer-container">
					<h1 className="drawer-title">Confirm Donation</h1>
					<div className="donate-avatar-container">
						<div className="donate-avatar-container">
							<UserAvatar displayName="Donor" />
							<div className="donate-arrow">&#8680;</div>
							<UserAvatar displayName="Recipient" />
						</div>
					</div>
					<div className="drawer-description donate-pre-description">
						Are you sure you would like to donate ${Math.floor(
							donationValue
						).toFixed(2)}{" "}
						({this.state.ethRate} ETH) to {charity.title}?
					</div>
					<div className="drawer-description donate-what-happens">
						(Your payment will be processed once a merchant and recipient agree
						on delivering and receiving your gifts before the expiration date.)
					</div>
					<div className="drawer-button-container">
						<Button
							className="drawer-button"
							onClick={this.props.data.onPrimary}
							variant="raised"
							size="medium"
							color="primary"
						>
							Donate
						</Button>
						<Button
							className="drawer-button"
							onClick={this.props.data.onSecondary}
							variant="raised"
							size="medium"
							color="default"
						>
							Cancel
						</Button>
					</div>
					<div className="drawer-description donate-post-description">
						If you choose to donate, you will be brought to MetaMask where you
						can complete your donation.
					</div>
				</div>
			</Drawer>
		)
	}
}

DonationDrawer.propTypes = {
	request: PropTypes.object,
	data: PropTypes.shape({
		open: PropTypes.bool,
		onClose: PropTypes.func,
		onPrimary: PropTypes.func, // When the user hits the primary butotn
		onSecondary: PropTypes.func // When the user hits the secondary button
	})
}

// WE NEED THIS NOT TO BREAK THE HOMEPAGE
DonationDrawer.defaultProps = {
	request: {
		dollars: 15.0
	},
	charity: {
		title: "SAMPLE CHARITY"
	}
	// TODO @Gabe get some default images for here
}
export default DonationDrawer
