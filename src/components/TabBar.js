import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {AppBar, Tabs, Tab, Paper, Button} from 'material-ui';

class TabBar extends Component {
	constructor(props) {
		super(props)
		this.state = {value:0}
	}
	render() {
		const keys = Object.keys(this.props.displayData)
		const lastTab = keys.length - 1

		const { value } = this.state;
		const handleTabChange = (event, value) => {
			this.setState({value: parseInt(value, 10)})
		}
		const moveTabBy = tabDir => () => {
			const value = Math.min(Math.max(parseInt(this.state.value + tabDir, 10), 0), lastTab)
			this.setState({value})	
		}

		const nextButton = (tab) => {
			if (tab === lastTab) {
				return (
					<Button onClick={this.props.onSubmit} style={{margin:"10px"}} variant="raised" color="secondary">Submit</Button>
				)
			}
			return (
				<Button onClick={moveTabBy(1)} style={{margin:"10px"}} variant="raised">Next</Button>
			) 
		}
		return (
			<div>
				<AppBar position="static">
					<Tabs value={value} onChange={handleTabChange}>
						{keys.map((k, i) =>  <Tab label={k} key={i}/>)}
					</Tabs>
				</AppBar>

				<Paper className = "tab-bar-container">
					{this.props.displayData[keys[value]]}
					<Button onClick={moveTabBy(-1)} disabled={this.state.value === 0} style={{margin:"10px"}} variant="raised">Previous</Button>
					{nextButton(this.state.value)}
				</Paper>
			</div>
		)
	}
}

TabBar.propTypes = {
	displayData: PropTypes.object.isRequired
}

export default TabBar;


