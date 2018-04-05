import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';


class Howitworks extends Component {
// @Natasha write your code here
  render() {
    return (
		<div>
			<NavBar/>
			<AppBar position="static" color="default">
				<Toolbar className = "title-bar">
					<h1>How it works</h1>
				</Toolbar>
			</AppBar>
		</div>


    )
  }
}

export default Howitworks;

