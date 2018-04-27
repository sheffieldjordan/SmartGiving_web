import React, { Component } from 'react';

import {PriceForItems} from './Helpers'

class NewGiftSummary extends Component {

	render() {

		const summarySection = (key, value) => {
			return (
				<div className = "gift-summary-kv">
					<span className = "gift-summary-key">{key} </span>
					<span className = "gift-summary-value">{value}</span>
				</div>
			)
		}

		return (
			<div className = "gift-summary-container">
				<h1 className = "gift-summary-title">Summary</h1>
				{summarySection("Gift title", this.props.gift.title)}
				{summarySection("Gift description", this.props.gift.description)}
				{summarySection("Requested funds", `$${PriceForItems(this.props.gift.items)}`)}
				{summarySection("Shipping address", this.props.store.getState().globalData.user.location)}
		   </div>
	   )
	}
}

export default NewGiftSummary;


