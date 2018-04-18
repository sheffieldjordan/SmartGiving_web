import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { toggleDrawer, selectRequest } from '../redux/actions'

import DonationDrawer from '../components/DonationDrawer'

class CharityDonationDrawer extends Component {

	render() {
		const storeState = this.props.store.getState()
		return (
			<DonationDrawer store={this.props.store}
				open={storeState.donationDrawerOpen}
				request={this.props.request}
				onClose={() => this.props.showRequest(false)}
				onPrimary={() => {
					this.props.showRequest(false)
					this.props.history.push('/thanks')
				}}
				onSecondary={() => this.props.showRequest(false)}
				donationValue={storeState.donationValue}/>
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

CharityDonationDrawer.propTypes = {
	request: PropTypes.object,
}


CharityDonationDrawer = connect(
	null,
	mapDispatchToProps
)(CharityDonationDrawer)

export default withRouter(CharityDonationDrawer)
