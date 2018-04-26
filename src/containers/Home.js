import React, { Component } from 'react';

import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import ReactPlayer from 'react-player'

import "../style/Components.css"



/*these are links attached to the three big buttons on the bottom*/

const LinkToDonors = props => <Link to="/home/donor" {...props} />
const LinkToMerchants = props => <Link to="/home/merchant" {...props} />
const LinkToRecipients = props => <Link to="/home/charity" {...props} />

class Home extends Component {
// @Natasha write your code here
	render() {

    return (

	    	<div><NavBar/>

	    	<div className="home-intro-container">

			    <div className="home-intro-text">
			        <Typography variant="display3">
			          Don't just give.
			        </Typography>
			        <Typography variant="display3" style={{color: '#EDAE44'}}>
			          Give smart.
			        </Typography>
			        <Typography variant="subheading">
			          SmartGiving is a blockchain-based application for non-cash donations. 
			          We connect individual donors and small local charity organizations around the world. 
			          Our mission is to reach transparency and accountability in charitable giving and decrease reliance on blind trust.
			        </Typography>
			    </div>

				<div className="home-intro-video">
					<ReactPlayer url="http://www.youtube.com/embed/5ct9ALYZ0W4"/>
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
				  For Charities
				</Button>
			</div>


			</div>
    );
  }
}



export default Home;


