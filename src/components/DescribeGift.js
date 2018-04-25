import React, { Component } from 'react';

import {TextField, Button, Chip} from 'material-ui';
import AddIcon from '@material-ui/icons/Add';

class DescribeGift extends Component {
	constructor(props) {
		super(props)
		this.state = {gift: {
						tags:[],
						expiration:"2018-05-10",
						description:""
					 },
					 tagInput:""}
	}

	render() {
		const appendTag = () => {
			const tag = this.state.tagInput
			if (tag !== undefined && tag.length !== 0) {
				let gift = this.state.gift
				gift.tags = [...gift.tags, tag]
				this.props.onUpdate(gift)
				// this.setState({gift})
				// this.setState({tagInput: ""})
				console.log(this.props.store.getState())
			}
		}
		const updateSection = (section) => event => {
			let gift = this.state.gift
			gift[section] = event.target.value
			this.setState({gift}, () => {})
			this.props.onUpdate(gift)
		}

		const updateTagInput = () => event => {
			let value = event.target.value
			value = value.replace(/\s+/g, '');
			this.setState({"tagInput": value})
		}

		const deleteTag = tag => event => {
			const tags = [...this.state.gift.tags]
			const deletionIndex = this.state.tags.indexOf(tag)
			tags.splice(deletionIndex, 1)

			let gift = this.state.gift
			gift.tags = tags
			this.setState({gift})
			this.props.onUpdate(gift)
		}

		const giftData = () => {
			return this.state.gift
		} 

		return (
		<div>
			<div className = "describe-gift-section">
				<span className = "describe-gift-label">Description </span>
				<TextField value={giftData().description} onChange={updateSection("description")} className = "describe-gift-textfield" multiline rows = "2" rowsMax= "15" placeholder = "Briefly state the purpose of this request"/>
			</div>
			<div className = "describe-gift-section">
				<span className = "describe-gift-label">Expiration date</span>
				<TextField  onChange={updateSection("expiration")}
			        id="date"
			        type="date"
			        value={giftData().expiration}
			        InputLabelProps={{
			          shrink: true,
			        }}
			    />
			</div>
			<div className = "describe-gift-section">
				<span className = "describe-gift-label">Tags </span>
				<TextField onChange={updateTagInput()} value={this.state.tagInput} className = "describe-gift-textfield-tags" placeholder = "Add tags to make your request more searchable" />
				<Button onClick={appendTag} className="describe-gift-add-tag" mini variant="fab" color="primary" aria-label="add"><AddIcon /></Button>
			</div>
			<div className = "describe-gift-section">
				{giftData().tags.map((tag, i) => {
					return <Chip key={i}
								 label={tag}
								 onDelete={deleteTag(tag)}/>
				})}
			</div>
		</div>
		)
	}
}


export default DescribeGift;


