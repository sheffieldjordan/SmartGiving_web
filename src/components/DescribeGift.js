import React, { Component } from 'react';

import {TextField, Button, Chip} from 'material-ui'
import AddIcon from '@material-ui/icons/Add';

class DescribeGift extends Component {
	constructor(props) {
		super(props)
		this.state = {tags:[], tagInput:""}
	}
	render() {
		const appendTag = () => {
			const tag = this.state.tagInput
			if (tag !== undefined && tag.length !== 0) {
				this.setState({tags: [...this.state.tags, tag]})
				this.setState({tagInput: ""})
			}
		}
		const updateSection = (section, allowSpaces=true) => event => {
			let value = event.target.value
			if (allowSpaces === false) {
				value = value.replace(/\s+/g, '');
			}
			this.setState({[section]: value})
		}

		const tagSectionValue = () => {
			return this.state.tagInput
		}

		const deleteTag = tag => event => {
			const tags = [...this.state.tags]
			const deletionIndex = this.state.tags.indexOf(tag)
			tags.splice(deletionIndex, 1)
			this.setState({tags})
		}

		return (
		<div>
			<div className = "describe-gift-section">
				<span className = "describe-gift-label">Summary </span>
				<TextField onChange={updateSection("summary")} className = "describe-gift-textfield" placeholder = "A short summary of your request" />
			</div>
			<div className = "describe-gift-section">
				<span className = "describe-gift-label">Description </span>
				<TextField onChange={updateSection("description")} className = "describe-gift-textfield" multiline rows = "5" rowsMax= "15" placeholder = "A more in depth request"/>
			</div>
			<div className = "describe-gift-section">
				<span className = "describe-gift-label">Tags </span>
				<TextField onChange={updateSection("tagInput", false)} value={this.state.tagInput} className = "describe-gift-textfield-tags" placeholder = "Add tags to make your request more searchable" />
				<Button onClick={appendTag} className="describe-gift-add-tag" mini variant="fab" color="primary" aria-label="add"><AddIcon /></Button>
			</div>
			<div className = "describe-gift-section">
				{this.state.tags.map((tag, i) => {
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


