import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import AboutUsToggle from './AboutUsToggle';
import SGLogo from '../images/logo_hand_hearts.svg'


const style = {
	height: '7vh',
	paddingRight: 6,
};


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
					<Button color="inherit" component={Link} to="/"> <img src={SGLogo} style={style} alt='Smart Giving logo'/>SmartGive</Button>
					<Button color="inherit" component={Link} to="/home/howitworks">How It Works</Button>
					<AboutUsToggle/>
				</Toolbar>
			</AppBar>
			{titleBar(this.props.title)}

		</div>
		);
	}
}

export default NavBar
