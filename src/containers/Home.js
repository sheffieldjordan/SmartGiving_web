import React, { Component } from 'react';

import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import ReactPlayer from 'react-player'

import "../style/Components.css"



/*these are links attached to the three big buttons on the bottom*/
const LinkToDonors = props => <Link to="/donor" {...props} />
const LinkToMerchants = props => <Link to="/bid" {...props} />
const LinkToRecipients = props => <Link to="/selectmerchant" {...props} />



class Home extends Component {
// @Natasha write your code here
	render() {

    return (

	    	<div><NavBar/>

	    	<div className="home-intro-container">

			    <div className="home-intro-text">
			      <Paper elevation={4}>
			        <Typography variant="subhead" component="h1">
			          Hello
			        </Typography>
			        <Typography variant="">
			          We are SmartGiving. We know how to give smart.
			        </Typography>
			      </Paper>
			    </div>

				<div className="home-intro-video">
					<ReactPlayer url='https://www.youtube.com/watch?v=lD9KAnkZUjU'/>
				</div>

			</div>

			<div className="big-buttons-container">
				<Button variant="raised" size="large" color="primary" component={LinkToDonors} className="big-button">
				  For Donors
				</Button>

				<Button variant="raised" size="large" color="primary" component={LinkToMerchants} className="big-button">
				  For Merchants
				</Button>

				<Button variant="raised" size="large" color="primary" component={LinkToRecipients} className="big-button">
				  For Recipients
				</Button>
			</div>


			</div>
    );
  }
}



export default Home;


