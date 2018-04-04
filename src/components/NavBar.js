import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

class NavBar extends Component {
	render() {
		return (
		<div>
			<AppBar position="static" color="primary">
				<Toolbar className="button-bar" disableGutters={true}>
					<Button color="inherit" component={Link} to="/about">About Us</Button>
					<Button color="inherit">How It Works</Button>
					<Button color="inherit">Contact</Button>
				</Toolbar>
			</AppBar>
			<AppBar position="static" color="default">
				<Toolbar className = "title-bar">
					<h1>SmartGiving</h1>
				</Toolbar>
			</AppBar>
		</div>
		);
	}
}

export default NavBar
