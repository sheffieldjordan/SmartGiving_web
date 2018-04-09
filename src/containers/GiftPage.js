import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import {Paper, Button} from 'material-ui'
import {kStyleElevation, kStylePaper} from '../style/styleConstants'
import RequestTable from '../components/RequestTable'

import reqData from '../data/requests'

import '../style/GiftPage.css'

class GiftPage extends Component {
	render() {
		const giftData = {
			"title": "School Supplies",
			"requester": "Palmira Elementary School",
			"dollars": 15.00,
			"summary": "We are starting a new program for children age 5-12 starting this summer 2018. While parents are usually at work, we will engage the children in different activities to develop, enhance, and provide venues to express their creativity. One of the best times we have with our children is using art as an outlet. These supplies will greatly support the children to express themselves fully and allow them to spend time effectively when adults are not around in the house.",
			"challenge": "Because of the lack of available school supply stores in our region and money to have them ship from bigger markets, families have a hard time attaining the school supplies for their children and we also have difficulty finding them efficiently. Most of the supplies we have currently are very old, broken, or unusable. They are also not prioritized in the local government as they need to answer to more urgent and bigger needs posed by the communities. Since families cannot attain them, we cannot expect children to bring necessary supplies when they come to our program.",
			"about": "Palmira Secondary School is in Palmira, Colombia, located Southwest of Colombia. We are a village based school for students between ages 5-12 throughout the year so that they can receive the necessary education and support when adults are not present at home during the day. Other than the typical school subjects, such as math and writing, our focus is to also engage the students in extracurricular activities as an outlet of their creativity and emotions. These activities include arts and craft, physical education (PE), and dancing."
		}
		const storeState = this.props.store.getState()
		console.log(storeState)
		return (
			<div>
				<NavBar title="Gift page"/>
				<div className = "page-container">
					<h1 className = "gift-page-title">
						{giftData.title}
					</h1>
					<div className = "gift-page-author">
					for {giftData.requester}
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
									{giftData.about}
								</div>
							</Paper>
						</div>
						<div className = "gift-inventory">
							<Paper elevation={kStyleElevation} style={kStylePaper}>
								<h2 className = "gift-summary-title"> Request Details </h2>
								<RequestTable data={storeState.requests}/>
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


