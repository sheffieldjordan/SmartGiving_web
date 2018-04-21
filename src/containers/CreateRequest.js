import React, { Component } from 'react';

import TabBar from '../components/TabBar'
import NavBar from '../components/NavBar'
import DescribeGift from '../components/DescribeGift'

class CreateRequest extends Component {

	render() {
		const displayData = {
			"Basic Information" : <DescribeGift/>,
			"List of Goods" : <div>Two</div>,
			"Merchant Selection" : <div>Three</div>
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


