import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { toggleDrawer, selectRequest } from '../redux/actions'

import CharityCard from '../components/CharityCard'
import NavBar from '../components/NavBar'
import CharityDonationDrawer from '../components/CharityDonationDrawer'
import { ImageLibrary } from '../components/ImageLibrary'

import "../style/DonorHome.css"

class DonorHome extends Component {

	render() {
		const storeState = this.props.store.getState()
		const selectDonate = (request) => () => {
			this.props.showRequest(true, request)
		}

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
						description={r.summary}
						image={ImageLibrary(r.charity.image)}
						tags={r.tags}
						onDonate={selectDonate(r)}
						onLearnMore={() =>  this.props.history.push({
							pathname: "/gift/" + r.id,
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


