import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import AboutUsToggle from './AboutUsToggle';
import SGLogo from '../images/SGlogo.svg'



const logoStyle = {
	paddingLeft: 7,
	margin: '5px 0px 5px 45px',
	height: '7vh',
}

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
				<Toolbar disableGutters={true}  >
					<img src={SGLogo}  alt='Smart Giving logo' style={logoStyle}/>
					<span className="button-bar">
					<Button color="inherit" component={Link} to="/"> SmartGive</Button>
					<Button color="inherit" component={Link} to="/home/howitworks">How It Works</Button>
					<AboutUsToggle/>
					</span>
				</Toolbar>
			</AppBar>
			{titleBar(this.props.title)}

		</div>
		);
	}
}

export default NavBar
