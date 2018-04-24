import React, { Component } from 'react';

import TabBar from '../components/TabBar'
import NavBar from '../components/NavBar'
import DescribeGift from '../components/DescribeGift'
import ItemizeGift from '../components/ItemizeGift'
import Button from 'material-ui/Button'



class CreateRequest extends Component {

	render() {
		const displayData = {
			"Basic Information" : <DescribeGift store={this.props.store}/>,
			"List of Goods" : <ItemizeGift store={this.props.store}/>,
			"Let's do it": <div className = "describe-gift-section">
							<span>Now you can post your request on SmartGiving</span>
							<div><Button style={{margin:"10px"}} variant="raised" color="secondary">Submit</Button></div>
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


