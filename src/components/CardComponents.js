import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import {StringFromDate, WeiToDollars, WeiToEther} from '../style/Formatter'

/* PRIVATE */ 
class CharityCardTags extends Component {
	render() {
		return (
			<div className="charity-card-tags">
				{this.props.tags.map((t, i) => {
					return (<span key={i}><span className = "charity-card-tag">#{t}</span>  </span>)
				})}
			</div>
		)
	}
}

CharityCardTags.propTypes = {
	tags: PropTypes.array.isRequired,
}

class DonorCommitment extends Component {
	render () {
		const donation = this.props.request.donorDonationAmt
		return (
			<div className = "charity-card-commitment-section">
				<span className = "charity-card-commitment-pre">Donor has committed: </span>
				<span className = "charity-card-commitment-dollars">${WeiToDollars(donation)} (~{WeiToEther(donation).toFixed(3)} ETH)</span>
			</div>
		)
	}
}

class DonorExpiry extends Component {
	render () {
		return (
			<div className = "charity-card-expiry-section">
				<span className = "charity-card-expiry-pre">Expiry date: </span>
				<span className = "charity-card-expiry-date">{StringFromDate(new Date(this.props.expiry))}</span>
			</div>
		)
	}
}

// This is a hacky way to deal with the key, but whatever.
let _keyVal = 0;
const key = () => _keyVal++

const button = (title, onClick) => {
	return <Button key={key()} size="medium" variant="raised" color="default" onClick={onClick}>{title}</Button>
}

/* EXPORTS */
export const DonorPreButtons = (request) => {
	return [
		<CharityCardTags key={key()} tags={request.tags}/>
	]
}

export const DonorActionButtons = (charity, [onLearnMore, onDonate]) => {
	return [
		button("Learn More", onLearnMore(charity)),
		button("Donate", onDonate(charity))
    ]
}

export const MerchantPreButtons = (request) => {
	return [
		<DonorCommitment request={request} key={key()}/>
	]
}

export const MerchantActionButtons = (charity, [onLearnMore, onBid]) => {
	return [
		button("Learn More", onLearnMore(charity)),
		button("Bid Now", onBid(charity))
    ]
}

export const MerchantPostButtons = (request) => {
	if (request.expiry === undefined) return []
	return [
		<DonorExpiry key={key()} expiry={request.expiry}/>
	]
}
