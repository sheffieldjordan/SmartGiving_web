import React, { Component } from 'react';

import NavBar from '../components/NavBar'
import RequestTable from '../components/RequestTable'
import CharityDonationDrawer from '../components/CharityDonationDrawer'

import {Paper, Button} from 'material-ui'
import {kStyleElevation, kStylePaper} from '../style/styleConstants'

import { toggleDrawer, selectRequest } from '../redux/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import '../style/GiftPage.css'

class GiftPage extends Component {
	render() {
		const storeState = this.props.store.getState()
		console.log(this.props.history.location)


		// TODO @Gabe make this use the real path!
		const loadGiftData = () => {
			if (this.props.history.location.state === undefined){
				console.log("WARNING: USING FAKE DATA")
				return storeState.requests[0]
			}
			return this.props.history.location.state.request
		}
		const giftData = loadGiftData()

		const selectDonate = () => {
			this.props.showDonate(true, giftData.charity)
		}
		return (
			<div>
				<NavBar title="Gift information page"/>
				<div className = "page-container">
					<h1 className = "gift-page-title">
						{giftData.title}
					</h1>
					<div className = "gift-page-author">
					for {giftData.charity.title}
					</div>


					<div className = "gift-info-container">
						<div className = "gift-summary-section">
							<Paper elevation={kStyleElevation} style={kStylePaper}>
								<h2 className = "gift-summary-title"> Summary </h2>
								<div className = "gift-summary">
									{giftData.summary}
								</div>
								<h2 className = "gift-summary-title"> Challenge </h2>
								<div className = "gift-summary">
									{giftData.challenge}
								</div>
							</Paper>
							<Paper elevation={kStyleElevation} style={kStylePaper}>
								<h2 className = "gift-summary-title"> About </h2>
								<div className = "gift-summary">
									{giftData.charity.about}
								</div>
							</Paper>
						</div>
						<div className = "gift-inventory">
							<Paper elevation={kStyleElevation} style={kStylePaper}>
								<h2 className = "gift-summary-title"> Request Details </h2>
								<RequestTable data={giftData.inventory}/>
								<div className = "gift-donation-section">
									<h3 className = "gift-donation-cost"> Total cost: ${Math.floor(giftData.dollars).toFixed(2)} </h3>
									<Button size="large" variant="raised" color="primary" onClick={selectDonate}>Donate</Button>
								</div>
							</Paper>
						</div>
					</div>
					<CharityDonationDrawer store={this.props.store} request={giftData}/>
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


