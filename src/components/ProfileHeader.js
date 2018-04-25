import React, { Component } from 'react';
import UserAvatar from './UserAvatar';

class ProfileHeader extends Component {
	render() {
		const userInfo = this.props.store.getState().globalData.user;
		return (
			<header style={{"marginBottom" : 20}}>
			  <div className = "user-info-header">
			    <UserAvatar displayName={userInfo.charityName} />
			    <div className = "user-info-text">
			      <h1 className="charity-title">{userInfo.charityName}</h1>
			      <div className="charity-subtitle">{locationWithKeys(["city", "country"], userInfo.location)}</div>
			    </div>
			  </div>
			</header>
		)
	}
}

const locationWithKeys = (keys, location) => {
	const reducer = (accumulator, currentValue, i) => {
		if (location[currentValue] === undefined)
			return accumulator
		let val = i === 0 ? accumulator : accumulator + ", "
		val += location[currentValue]
		return val
	}
	return keys.reduce(reducer, "")
}

export default ProfileHeader