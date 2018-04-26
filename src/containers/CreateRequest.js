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
		this.state = {gift:{}}
	}

	handleSubmit = () => {
		axios.put(`/api/addGift`, this.state.gift);
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
			"Basic Information" : <DescribeGift store={this.props.store} onUpdate = {updateGift}/>,
			"List of Goods" : <ItemizeGift store={this.props.store} onUpdate = {updateGift}/>,
			"Let's do it": <div className = "describe-gift-section">
							<span>Now you can post your request on SmartGiving's gift factory</span>
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


