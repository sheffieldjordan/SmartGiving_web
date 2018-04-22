import React, { Component } from 'react';

import {TextField, Button, FormControl, FormHelperText} from 'material-ui'
import RequestTable from '../components/RequestTable'
import AddIcon from '@material-ui/icons/Add';

class ItemizeGift extends Component {
	constructor(props) {
		super(props)
		this.state= {items:[], name:"", num:0, unit:""}
	}
	render() {

		const updateSection = section => event => {
			if (event.target.value !== undefined) {
				this.setState({[section]: event.target.value})
			}
		}
		const addItem = event => {
			const item = {
				item: this.state.name,
				num: this.state.num,
				unit: this.state.unit
			}
			this.setState({name:"",
							num:0,
							unit:"",
							items:[...this.state.items, item]})

		}


		const requestsSection = () => {
			if (this.state.items.length === 0) {
				return (<div/>)
			} else {
				return (<RequestTable data={this.state.items}/>)
			}
		}


		return (
		<div>
			<div className = "itemize-add-item-container">
				<FormControl className = "itemize-name-of-good">
					<TextField placeholder="Name of good" onChange={updateSection("name")} value={this.state.name}/>
					<FormHelperText>Name of Good</FormHelperText>
				</FormControl>
				<FormControl >
					<TextField type="number" onChange={updateSection("num")} value={this.state.num}/>
					<FormHelperText>Number</FormHelperText>
				</FormControl>
				<FormControl>
					<TextField placeholder="Unit" onChange={updateSection("unit")} value={this.state.unit}/>
					<FormHelperText>Unit</FormHelperText>
				</FormControl>
				<Button onClick={addItem} mini variant="fab" color="primary" aria-label="add"><AddIcon /></Button>

			</div>
			{requestsSection()}
		</div>
		)
	}
}


export default ItemizeGift;


