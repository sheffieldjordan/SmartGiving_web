import React, { Component } from 'react';

import TabBar from '../components/TabBar'
import NavBar from '../components/NavBar'
import DescribeGift from '../components/DescribeGift'
import ItemizeGift from '../components/ItemizeGift'
class CreateRequest extends Component {

	render() {
		const displayData = {
			"Basic Information" : <DescribeGift/>,
			"List of Goods" : <ItemizeGift store={this.props.store}/>,
			"Merchant Selection" : <div>Maybe implement this later?</div>
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


