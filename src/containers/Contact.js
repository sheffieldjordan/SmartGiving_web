import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

class Contact extends Component {
// @Natasha write your code here
  render() {
    return (

		<div>
			<NavBar/>
			<AppBar position="static" color="default">
				<Toolbar className = "title-bar">
					<h1>Contact us</h1>
				</Toolbar>
			</AppBar>
		</div>
    )    
  }
}

export default Contact;