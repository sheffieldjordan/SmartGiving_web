import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/NavBar'


class CardPage extends Component {

	render() {

		return (
		<div>
			<NavBar/>
			<div className="page-container">
				<div className="charity-card-container">
					{this.props.cards.map((c, i) => c)}
				</div>
				{this.props.drawer}
			</div>
		</div>
		)
	}
}

CardPage.propTypes = {
	cards: PropTypes.array.isRequired,
	drawer: PropTypes.object.isRequired,
}

export default CardPage


