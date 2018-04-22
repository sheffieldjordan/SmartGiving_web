import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import "../style/Components.css";


class CharityHome extends Component {
	render() {
		return(
		<div>
			<NavBar/>
			<AppBar position="static" color="default">
				<Toolbar className = "title-bar">
					<h1>Charity's profile</h1>
				</Toolbar>
			</AppBar>


			/*Bonney write your code here*/


			/*Natasha write your code here*/

		</div>
	)}
}

export default CharityHome

