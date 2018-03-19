import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';


class ProfileHeader extends Component {
	render() {
	    const avatarStyle = {"marginRight":10, "height":70, "width":70, "font-size": 32, "background-color":"#317EAC"}
		return (
			<header style={{"marginBottom" : 20}}>
			  <div className = "user-info-header">
			    <Avatar size={70} style={avatarStyle}>A</Avatar>
			    <div className = "user-info-text">
			      <h1 className="charity-title">Ayudelos</h1>
			      <div className="charity-subtitle">Ciudad de Mexico, Mexico</div>
			    </div>
			  </div>
			</header>
		)
	}
}

export default ProfileHeader