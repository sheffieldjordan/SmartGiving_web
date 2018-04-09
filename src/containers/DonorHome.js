import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { toggleDrawer, selectCharity } from '../redux/actions'

import CharityCard from '../components/CharityCard'
import NavBar from '../components/NavBar'
import DonationDrawer from '../components/DonationDrawer'

import ImageColombian from '../images/test_colombian.jpg'
import ImageFrog from '../images/test_frog.jpg'
import ImageMexico from '../images/test_mexico.jpg'
import ImageTulip from '../images/test_tulip.jpg'

import Lorem from 'lorem-ipsum'

import "../style/DonorHome.css"

class DonorHome extends Component {

	render() {
		const storeState = this.props.store.getState()
		const selectDonate = (charity) => () => {
			this.props.showCharity(true, charity)
		}

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
						image={c.image}
						onDonate={selectDonate(c)}/>	
					})}
				</div>
				<DonationDrawer store={this.props.store}
				open={storeState.donationDrawerOpen}
				charity={storeState.selectedCharity}
				onClose={() => this.props.showCharity(false)}
				onPrimary={() => {
					this.props.showCharity(false)
					this.props.history.push('/thanks')
				}}
				onSecondary={() => this.props.showCharity(false)}/>
			</div>
		</div>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showCharity: (showDrawer, charity={}) => {
			dispatch(selectCharity(charity))
			dispatch(toggleDrawer(showDrawer))
		}
	}
}

DonorHome = connect(
	null,
	mapDispatchToProps
)(DonorHome)

export default withRouter(DonorHome)


