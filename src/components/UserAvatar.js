import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';

class UserAvatar extends Component {
	render() {
	    const avatarStyle = {"marginRight":10, "height":70, "width":70, "fontSize": 32, "backgroundColor":"#317EAC"}
		return (
		    <Avatar size={70} style={avatarStyle}>
		    	{this.props.displayName.charAt(0)}
		    </Avatar>
		)
	}
}

UserAvatar.propTypes = {
	displayName: PropTypes.string.isRequired
}

export default UserAvatar;

