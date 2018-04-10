import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

class NavBar extends Component {
	render() {
		const titleBar= (title) => {
			if (title !== undefined) {
				return (
					<AppBar position="static" color="default">
						<Toolbar className = "title-bar">
							<h1>{title}</h1>
						</Toolbar>
					</AppBar>
				)
			}
			return <div/>
		}
		return (
		<div>
			<AppBar position="static" color="primary">
				<Toolbar className="button-bar" disableGutters={true}>
					<Button color="inherit" component={Link} to="/">SmartGiving</Button>
					<Button color="inherit" component={Link} to="/about">About Us</Button>
					<Button color="inherit" component={Link} to="/howitworks">How It Works</Button>
					<Button color="inherit" component={Link} to="/contact">Contact</Button>
				</Toolbar>
			</AppBar>
			{titleBar(this.props.title)}

		</div>
		);
	}
}

export default NavBar
