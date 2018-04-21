import React, { Component } from 'react';
import TabBar from '../components/TabBar'
import NavBar from '../components/NavBar'


class CreateRequest extends Component {

	render() {
		const displayData = {
			"Basic Information" : <div>One</div>,
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


