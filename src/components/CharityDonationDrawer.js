import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { toggleDrawer, selectCharity } from '../redux/actions'

import DonationDrawer from '../components/DonationDrawer'

class CharityDonationDrawer extends Component {

	render() {
		const storeState = this.props.store.getState()
		return (
			<DonationDrawer store={this.props.store}
				open={storeState.donationDrawerOpen}
				charity={this.props.charity}
				onClose={() => this.props.showCharity(false)}
				onPrimary={() => {
					this.props.showCharity(false)
					this.props.history.push('/thanks')
				}}
				onSecondary={() => this.props.showCharity(false)}/>
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

CharityDonationDrawer.propTypes = {
	request: PropTypes.object.isRequired,
}


CharityDonationDrawer = connect(
	null,
	mapDispatchToProps
)(CharityDonationDrawer)

export default withRouter(CharityDonationDrawer)
