import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { toggleDrawer, selectCharity } from '../redux/actions'

import {Bid} from '../ethereum/components/Bid'
import { DonateEthereum } from "../ethereum/components/Donate"

import DonationDrawer from '../components/DonationDrawer'
import BidDrawer from '../components/BidDrawer'

class DrawerFactory extends Component {

	render() {

		const blockchainFunc = (type) => {
			switch(type) {
				case "donor":
					return DonateEthereum
				case "merchant":
					return Bid
				default: return () => console.log(`No blockchain call for type ${type}`)
			}
		}
		const drawerData = (props) => {
			const blockchainCall = blockchainFunc(this.props.type)
			const storeState = props.store.getState()
			const onPrimary = () => {
				blockchainCall((error) => {
					if (error !== undefined) {
						alert(`Blockchain Error: ${error}`)
					} else {
						props.history.push('/thanks')
					}
				})
				props.showRequest(false)
			}
			const onClose = () => props.showRequest(false)
			const onSecondary = onClose
			let data = {
				onClose,
				onPrimary,
				onSecondary,
				open: storeState.updateDrawer.donationDrawerOpen,
			}
			return data
		}
		const storeState = this.props.store.getState()
		const data = drawerData(this.props)
		const moneyVal = this.props.money !== undefined ? this.props.money : parseFloat(storeState.updateDrawer.donationValue)
		if (this.props.type === "donor") {
			return (
				<DonationDrawer store={this.props.store}
					data={data}
					donationValue={moneyVal}
					charity={this.props.charity}
					blockchainCall={DonateEthereum}
				/>
			)
		}
		else if (this.props.type === "merchant") {
			return (
				<BidDrawer store={this.props.store}
					data={data}
					charity={this.props.charity}
					bid={moneyVal}
					blockchainCall={Bid}
				/>
				)
		} else {
			console.warn(`Uh oh! Bad drawer prop type: ${this.props.type}`)
		}
	}
}


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showRequest: (showDrawer, request={}) => {
			dispatch(selectCharity(request))
			dispatch(toggleDrawer(showDrawer))
		}
	}
}

DrawerFactory.propTypes = {
	request: PropTypes.object,
}


DrawerFactory = connect(
	null,
	mapDispatchToProps
)(DrawerFactory)

export default withRouter(DrawerFactory)
