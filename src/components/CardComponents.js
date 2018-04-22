import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

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


export const DonorPreButtons = (tags) => {
	return [
		<CharityCardTags key={99} tags={tags}/>
	]
}

export const DonorActionButtons = (onLearnMore, onDonate) => {
	return [
      <Button key={0} size="medium" variant="raised" color="default" onClick={onLearnMore}>Learn More</Button>,
      <Button key={1} size="medium" variant="raised" color="default" onClick={onDonate}>Donate</Button>
    ]
}