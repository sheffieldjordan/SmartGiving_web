import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { toggleDrawer, selectCharity } from '../redux/actions'

import {Bid} from '../ethereum/components/Bid'
import {DonateEthereum} from "../ethereum/components/Donate"
import {DonationRequest, BidRequest} from '../backend/EthereumRequestManager'
import {UpdateDatabase} from '../backend/APIManager'

import DonationDrawer from '../components/DonationDrawer'
import BidDrawer from '../components/BidDrawer'
import {UserType} from '../components/User'

class DrawerFactory extends Component {

	render() {

		const blockchainFuncs = (type) => {
			switch(type) {
				case UserType.DONOR:
					return [DonateEthereum, DonationRequest]
				case UserType.MERCHANT:
					return [Bid, BidRequest]
				default: return () => console.log(`No blockchain call for type ${type}`)
			}
		}


		const drawerData = (props) => {
			const [blockchainCall, requestFormatter] = blockchainFuncs(this.props.type)
			const storeState = props.store.getState()
			const onPrimary = (money) => () => {
				const ethData = requestFormatter(this.props.charity, money)
				console.log(ethData)
				blockchainCall(ethData, (error) => {
					if (error !== undefined) {
						alert(`Blockchain Error: ${error.message}`)
						console.log(error)
					} else {
						UpdateDatabase(() => {
							props.history.push('/thanks')
						})
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
		switch(this.props.type) {
			case UserType.DONOR:
				return <DonationDrawer store={this.props.store}
					data={data}
					donationValue={moneyVal}
					charity={this.props.charity}
				/>
			case UserType.MERCHANT:
				return <BidDrawer store={this.props.store}
					data={data}
					charity={this.props.charity}
					bid={moneyVal}
				/>
			default: console.warn(`Uh oh! Bad drawer prop type: ${this.props.type}`)
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
