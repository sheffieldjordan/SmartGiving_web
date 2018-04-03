import React, { Component } from 'react';
import UserAvatar from '../components/UserAvatar';
import CharityCard from '../components/CharityCard'

import ImageColombian from '../images/test_colombian.jpg'
import ImageFrog from '../images/test_frog.jpg'
import ImageMexico from '../images/test_mexico.jpg'
import ImageTulip from '../images/test_tulip.jpg'

import Lorem from 'lorem-ipsum'


import "../style/DonorHome.css"

class DonorHome extends Component {
	render() {
		const userInfo = this.props.store.getState().user;
		const charities = [ {title: "Donate 2 Colombian Kidz", image: ImageColombian},
							{title: "Too Many Tulips", image: ImageTulip},
							{title: "Save Our Frogs", image:ImageFrog},
							{title: "Si Se Puede: Language for a better time", image:ImageMexico}]
		return (
		<div>
			<div className="page-header">
				<h1 className = "page-title">SmartGiving</h1>
			    <UserAvatar displayName={userInfo.charityName}/>
			</div>
			<div className="charity-card-container">
				{charities.map((c, i) => {
					return <CharityCard key={i}
					title={c.title}
					description={Lorem({count:Math.floor((Math.random() * 3) + 4)})}
					image={c.image}/>	
				})}
			</div>
		</div>
		)
	}
}

export default DonorHome;


