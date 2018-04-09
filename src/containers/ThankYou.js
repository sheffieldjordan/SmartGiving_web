import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar'

import ImageCheckmark from '../images/checkmark.png'

import '../style/ThankYou.css';

class ThankYou extends Component {

	render() {
		return (
			<div>
				<NavBar/>
				<div className="page-container">
					<div className="thanks-title">
						Thank you!
					</div>
					<img className="thanks-image" src={ImageCheckmark} alt="check"/>
					<div className="thanks-text">
						Your gift is deeply appreciated!
						We'll let you know when we find a merchant who is able to fulfill it.
						You can check out more places need your help <Link to="/"> here.</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default ThankYou;


