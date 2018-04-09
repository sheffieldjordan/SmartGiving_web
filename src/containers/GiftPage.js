import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import {Paper, Button} from 'material-ui'
import {kStyleElevation, kStylePaper} from '../style/styleConstants'
import RequestTable from '../components/RequestTable'

import reqData from '../data/requests'

import '../style/GiftPage.css'

class GiftPage extends Component {
	render() {

		const storeState = this.props.store.getState()
		const giftData = storeState.requests[0]
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
									<Button size="large" variant="raised" color="primary">Donate</Button>
								</div>
							</Paper>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default GiftPage;


