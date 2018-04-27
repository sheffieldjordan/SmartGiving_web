import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import {StringFromTimeStamp} from '../style/Formatter'

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
		return (
			<div className = "charity-card-commitment-section">
				<span className = "charity-card-commitment-pre">Donor has committed: </span>
				<span className = "charity-card-commitment-dollars">${this.props.request.dollars}</span>
			</div>
		)
	}
}

class DonorExpiry extends Component {
	render () {
		return (
			<div className = "charity-card-expiry-section">
				<span className = "charity-card-expiry-pre">Expiry date: </span>
				<span className = "charity-card-expiry-date">{StringFromTimeStamp(this.props.expiry["$date"])}</span>
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
export const DonorPreButtons = (tags) => {
	return [
		<CharityCardTags key={key()} tags={tags}/>
	]
}

export const DonorActionButtons = (onLearnMore, onDonate) => {
	return [
		button("Learn More", onLearnMore),
		button("Donate", onDonate)
    ]
}

export const MerchantPreButtons = (request) => {
	return [
		<DonorCommitment request={request} key={key()}/>
	]
}

export const MerchantActionButtons = (onLearnMore, onBid) => {
	return [
		button("Learn More", onLearnMore),
		button("Bid Now", onBid)
    ]
}

export const MerchantPostButtons = (request) => {
	if (request.expiry === undefined) return []
	return [
		<DonorExpiry key={key()} expiry={request.expiry}/>
	]
}
