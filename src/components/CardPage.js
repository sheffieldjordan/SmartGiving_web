import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/NavBar'
import {Divider} from 'material-ui'

class CardPage extends Component {

	render() {

		return (
		<div>
			<NavBar/>
			<div className="page-container">
				<div className="charity-card-container">
					{this.props.sections.map((s, i) => {
						return (
							<div key={i} className="charity-section-container">
								{s.title !== undefined && <div className = "charity-section-title">{s.title}</div>}
								{s.cards.map((c, i) => c)}
								{i !== this.props.sections.length - 1 && <Divider/>}
							</div>
						)
					})}
				</div>
				{this.props.drawer}
			</div>
		</div>
		)
	}
}

CardPage.propTypes = {
	sections: PropTypes.array.isRequired,
	drawer: PropTypes.object.isRequired,
}

export default CardPage


