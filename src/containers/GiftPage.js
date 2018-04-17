import React, { Component } from 'react';

import NavBar from '../components/NavBar'
import RequestTable from '../components/RequestTable'
import CharityDonationDrawer from '../components/CharityDonationDrawer'
import ContactInfo from '../components/ContactInfo'
import { ImageLibrary } from '../components/ImageLibrary'

import { Paper, Button, Card, CardMedia, TextField, FormHelperText, FormControl, InputAdornment} from 'material-ui'
import {kStyleElevation, kStylePaper} from '../style/styleConstants'

import { toggleDrawer, selectRequest } from '../redux/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import '../style/GiftPage.css'

class GiftPage extends Component {
	constructor(props) {
		super(props)
		const giftData = this.loadGiftData()
		this.state = {donationValue: Math.floor(giftData.dollars).toFixed(2)}
	}

	loadGiftData() {
		const storeState = this.props.store.getState()
		if (this.props.history.location.state === undefined){
			console.log("WARNING: USING FAKE DATA")
			return storeState.requests[0]
		}
		return this.props.history.location.state.request
	}
	render() {
		const handleDonationChange = (event) => {
			let donationValue = Math.floor(this.loadGiftData().dollars).toFixed(2)
			const n = event.target.value
			if (!isNaN(parseFloat(n)) && isFinite(n) && parseFloat(n) !== 0) {
				// Shout out to StackOverflow for making a max of two digits parseFloat
				const digits = Math.min(2, (n.toString().split('.')[1] || []).length)
				const periodVal = digits === 0 ? '.' : ''
				donationValue =Math.floor(parseFloat(n)).toFixed(digits) + periodVal
			}
			this.setState({donationValue})

		}
		const giftData = this.loadGiftData()

		const selectDonate = () => {
			this.props.showDonate(true, giftData.charity)
		}
		return (
			<div>
				<NavBar/>
				<div className = "page-container">
					<div className = "gift-info-container">
						<div className = "gift-info-section">
							<Card className="gift-info-image-card">
								<CardMedia className="gift-info-image" title={giftData.charity.title} image={ImageLibrary(giftData.charity.image)}>
								<div className = "gift-background-color">
									<div className = "gift-title-container">
										<h1 className = "gift-page-title">
											{giftData.title}
										</h1>
										<div className = "gift-page-author">
											for {giftData.charity.title}
										</div>
									</div>
								</div>
								</CardMedia>
							</Card>
							<Paper elevation={kStyleElevation} style={kStylePaper}>
								<h2 className = "gift-background-title"> Background </h2>
								<div className = "gift-background">
									{giftData.background}
								</div>
								<h2 className = "gift-background-title"> Why There Is a Challenge </h2>
								<div className = "gift-background">
									{giftData.challenge}
								</div>
							</Paper>

						</div>
						<div className = "gift-info-section">
							<Paper elevation={kStyleElevation} style={kStylePaper}>
								<h2 className = "gift-background-title"> Request Details </h2>
								<RequestTable data={giftData.inventory}/>
								<div className = "gift-donation-section">
									<div className = "gift-donation-money-section">
										<div className = "gift-donation-estimate"> Estimated Cost of Goods: <span className = "gift-donation-cost">${Math.floor(giftData.dollars).toFixed(2)} </span></div>
										<div className = "gift-donation-fill-donation">
											<span className = "gift-your-donation">Your Donation:</span>
											<FormControl>
												<TextField InputProps = {{classes: {root:"donation-text-field"},
																			startAdornment: <InputAdornment className="donation-text-field"
																													position="start">
																									$</InputAdornment>}}
															required={true}
															id="donation-value"
															value={this.state.donationValue}
															onChange={handleDonationChange}/>
												<FormHelperText id="name-helper-text">How much you want to donate?</FormHelperText>
											</FormControl>
										</div>
									</div>
									<Button size="large" className="gift-donate-button" variant="raised" color="primary" onClick={selectDonate}>Donate</Button>
								</div>
							</Paper>
							<Paper elevation={kStyleElevation} style={kStylePaper}>
								<h2 className = "gift-background-title"> About Recipient </h2>
								<div className = "gift-background">
									{giftData.charity.about}
								</div>
								<h2 className = "gift-background-title"> Learn More </h2>
								<div className = "gift-background">
									<ContactInfo user={giftData.charity}></ContactInfo>
								</div>
							</Paper>

						</div>
					</div>
					<CharityDonationDrawer store={this.props.store} request={giftData} donationValue={parseFloat(this.state.donationValue)}/>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showDonate: (showDrawer, request={}) => {
			dispatch(selectRequest(request))
			dispatch(toggleDrawer(showDrawer))
		}
	}
}

GiftPage = connect(
	null,
	mapDispatchToProps
)(GiftPage)

export default withRouter(GiftPage);


