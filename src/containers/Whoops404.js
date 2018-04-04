import React, { Component } from 'react';

class Whoops404 extends Component {
	render() {
        return (<h1>Sorry, we couldn't find anything at "{this.props.location.pathname}"</h1>)
	}
}

export default Whoops404;
