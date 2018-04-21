import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

class TabBar extends Component {
	constructor(props) {
		super(props)
		this.state = {value:0}
	}
	render() {
		const keys = Object.keys(this.props.displayData)
		const { value } = this.state;
		const handleTabChange = (event, value) => {
			this.setState({value})
		}
		return (
			<div>
				<AppBar position="static">
					<Tabs value={value} onChange={handleTabChange}>
						{keys.map((k, i) =>  <Tab label={k} key={i}/>)}
					</Tabs>
				</AppBar>

				<Paper>
					{this.props.displayData[keys[value]]}
				</Paper>
			</div>
		)
	}
}

TabBar.propTypes = {
	displayData: PropTypes.object.isRequired
}

export default TabBar;


