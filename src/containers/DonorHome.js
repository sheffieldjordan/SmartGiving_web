import React, { Component } from 'react';
import CharityCard from '../components/CharityCard'
import NavBar from '../components/NavBar'

import ImageColombian from '../images/test_colombian.jpg'
import ImageFrog from '../images/test_frog.jpg'
import ImageMexico from '../images/test_mexico.jpg'
import ImageTulip from '../images/test_tulip.jpg'

import Lorem from 'lorem-ipsum'

import "../style/DonorHome.css"

class DonorHome extends Component {
	render() {
		const charities = [ {title: "Donate 2 Colombian Kidz", image: ImageColombian},
							{title: "Too Many Tulips", image: ImageTulip},
							{title: "Save Our Frogs", image:ImageFrog},
							{title: "Si Se Puede: Language for a better time", image:ImageMexico}]
		return (
		<div>
			<NavBar/>
			<div className="page-container">
				<div className="charity-card-container">
					{charities.map((c, i) => {
						return <CharityCard key={i}
						title={c.title}
						description={Lorem({count:Math.floor((Math.random() * 3) + 4)})}
						image={c.image}/>	
					})}
				</div>
			</div>
		</div>
		)
	}
}

export default DonorHome


