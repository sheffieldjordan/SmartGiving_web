import React, { Component } from 'react';
import { connect } from 'react-redux'

import DonationDrawer from '../components/DonationDrawer'
import Button from 'material-ui/Button';

import { toggleDrawer } from '../redux/actions'

import '../style/DonatePage.css';

class DonatePage extends Component {
	render() {
		const storeState = this.props.store.getState()
		const closeDrawer = () => this.props.showDrawer(false)
		return (
			<div className="page-container">
				<h1>Donate!</h1>
				<Button className="trial-button"  onClick = {() => {this.props.showDrawer(true)}} variant="raised" size="medium">Let's do this!</Button>
				<DonationDrawer store={this.props.store}
								open={storeState.donationDrawerOpen}
								onClose={closeDrawer}
								onPrimary={closeDrawer}
								onSecondary={closeDrawer}/>
			</div>
	)}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showDrawer: (showDrawer) => {
			dispatch(toggleDrawer(showDrawer))
		}
	}
}

DonatePage = connect(
	null,
	mapDispatchToProps
)(DonatePage)

export default DonatePage;
