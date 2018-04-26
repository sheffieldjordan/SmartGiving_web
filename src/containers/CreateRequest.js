import React, { Component } from 'react';

import TabBar from '../components/TabBar'
import NavBar from '../components/NavBar'
import DescribeGift from '../components/DescribeGift'
import ItemizeGift from '../components/ItemizeGift'
import Button from 'material-ui/Button'

import axios from "axios";


class CreateRequest extends Component {

	constructor(props) {
		super(props)
		this.state = {gift:{tags:[], name:"", expiration: "2018-05-10", num:0, unit:"", price:0, items:[]}}
	}

	handleSubmit = () => {

		const items = this.state.gift.items.map((itemObj, i) => {
			return {
				itemDescription: itemObj.name,
				quantity: itemObj.num,
				pricePerUnit: itemObj.price,
				
			} 
		})

		const giftJSON = {
			items,
			title: this.state.gift.description,
			ethRecipientAddr: "0xEEEEEEE8926b092D48365912dA3b092D48365912d6b",
			expiry: this.state.gift.expiration,
			dollars: 190,

		}

		axios.put(`/api/addGift`, giftJSON);
	} 

	render() {
		const updateGift = (newGift) => {
			let gift = this.state.gift
			gift = {
				...gift,
				...newGift
			}
			this.setState({gift})
		}

		// @Natasha
		// Access the gift with this.state.gift
		const displayData = {
			"Basic Information" : <DescribeGift store={this.props.store} onUpdate = {updateGift} gift={this.state.gift}/>,
			"List of Goods" : <ItemizeGift store={this.props.store} onUpdate = {updateGift} gift={this.state.gift}/>,
			"Let's do it": <div className = "describe-gift-section">
							<span>Now you can post your request on SmartGive's gift factory</span>
							<div><Button style={{margin:"10px"}} onClick={this.handleSubmit} variant="raised" color="secondary">Submit</Button></div>
						   </div>
		}
		return (
			<div>
				<NavBar title="New Request"/>
				<div className="page-container">
					<TabBar displayData={displayData}/>
				</div>
			</div>
		)
	}
}

export default CreateRequest;


