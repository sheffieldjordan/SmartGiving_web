import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

class ProfileHeader extends Component {
	render() {
		const userInfo = this.props.store.getState().user;
	    const avatarStyle = {"marginRight":10, "height":70, "width":70, "fontSize": 32, "backgroundColor":"#317EAC"}
		return (
			<header style={{"marginBottom" : 20}}>
			  <div className = "user-info-header">
			    <Avatar size={70} style={avatarStyle}>
			    	{userInfo.charityName.charAt(0)}
			    </Avatar>
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