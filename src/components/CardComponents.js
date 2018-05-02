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
				<span className = "charity-card-commitment-dollars">{WeiToEther(donation)} ETH (${WeiToDollars(donation)} USD)</span>
			</div>
		)
	}
}

class MerchantBid extends Component {
	render () {
		const bid = this.props.bid
		const minBid = this.props.minBid
		return (
			<div>
				<div className = "charity-card-commitment-section">
					<span className = "charity-card-commitment-pre">Your bid: </span>
					<span className = "charity-card-commitment-dollars">{WeiToEther(bid)} ETH (${WeiToDollars(bid)} USD)</span>
				</div>
				<div className = "charity-card-commitment-section">
				{bid === minBid && <span className="charity-card-min-bid">You currently have the lowest bid for this request</span>}
				{bid !== minBid && <span className="charity-card-min-bid">Currently there is a bid lower than yours at 
									<span className = "charity-card-other-bid"> {WeiToEther(minBid)} ETH (${WeiToDollars(minBid)})</span></span>}
				</div>

			</div>
		)
	}
}

class MerchantConfirm extends Component {
	render () {
		return(
			<div className = "charity-card-commitment-section">
				<span className="charity-card-merchant-confirm">Congratulations! You won the bid and your money has been sent. Now it's time to ship your items.</span> 
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

const merchantBid = (request, merchantAddress) => {
	try {
		return request.bids.filter(b => b.ethMerchantAddr === merchantAddress)[0].bidAmt
	} catch(err) {
		return undefined
	}
}


const merchantStatus = (request, merchantAddress) => {
	const bid = merchantBid(request, merchantAddress)
	const winningMerchant = request.ethMerchantAddr
	if (bid !== undefined) {
		if (winningMerchant === merchantAddress) {
			return "won"
		} else {
			return "bid"
		}
	} else {
		return "open"
	}
}

const minimumBid = (request) => {
	return request.bids.reduce((finalBid, b) => Math.min(finalBid, b.bidAmt), Number.MAX_SAFE_INTEGER)
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

export const MerchantPreButtons = (request, merchantAddress) => {
	const bid = merchantBid(request, merchantAddress)
	const minBid = minimumBid(request)
	switch(merchantStatus(request, merchantAddress)) {
		case "won":
			return [<MerchantConfirm request={request} key={key()}/>]
		case "bid":
			return [<MerchantBid bid={bid} minBid={minBid} key={key()}/>]
		case "open":
			return [<DonorCommitment request={request} key={key()}/>]
		default:
			return [<div/>]
	}
}

export const MerchantActionButtons = (charity, [onLearnMore, onBid], merchantAddress) => {
	let bidText
	let moreInfoText
	switch(merchantStatus(charity.gifts[0], merchantAddress)) {
		case "won":
			bidText = "Confirm Shipment"
			moreInfoText = "Review Items"
			break
		case "bid":
			bidText = "Change Bid"
			moreInfoText = "Learn More"
			break
		case "open":
			bidText = "Bid Now"
			moreInfoText = "Learn More"
			break
		default:
			break
	}
	return [
		button(moreInfoText, onLearnMore(charity)),
		button(bidText, onBid(charity))
    ]
}

export const MerchantPostButtons = (request) => {
	if (request.expiry === undefined) return []
	return [
		<DonorExpiry key={key()} expiry={request.expiry}/>
	]
}
