import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { toggleDrawer, selectRequest } from '../redux/actions'

import CharityCard from '../components/CharityCard'
import NavBar from '../components/NavBar'
import CharityDonationDrawer from '../components/CharityDonationDrawer'

import ImageColombian from '../images/test_colombian.jpg'
import ImageFrog from '../images/test_frog.jpg'
import ImageMexico from '../images/test_mexico.jpg'
import ImageTulip from '../images/test_tulip.jpg'

import Lorem from 'lorem-ipsum'

import "../style/DonorHome.css"

class DonorHome extends Component {

	render() {
		const storeState = this.props.store.getState()
		const selectDonate = (request) => () => {
			this.props.showRequest(true, request)
		}


		const images = [ImageColombian, ImageFrog, ImageTulip, ImageMexico]
		const requests = storeState.requests
		const drawerRequest = () => {
			if (Object.keys(storeState.selectedRequest).length === 0) {
				return undefined
			}
			return storeState.selectedRequest
		}
		return (
		<div>
			<NavBar/>
			<div className="page-container">
				<div className="charity-card-container">
					{requests.map((r, i) => {
						return <CharityCard key={i}
						title={r.charity.title}
						description={r.charity.about}
						image={images[i]}
						onDonate={selectDonate(r)}
						onLearnMore={() =>  this.props.history.push({
							pathname: "/gift",
							state: {request:r}}
							)}/>	
					})}
				</div>
				<CharityDonationDrawer store={this.props.store} request={drawerRequest()}/>
			</div>
		</div>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showRequest: (showDrawer, request={}) => {
			dispatch(selectRequest(request))
			dispatch(toggleDrawer(showDrawer))
		}
	}
}

DonorHome = connect(
	null,
	mapDispatchToProps
)(DonorHome)

export default withRouter(DonorHome)


