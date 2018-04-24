import React, { Component } from 'react';

import {TextField, Button, FormControl, FormHelperText} from 'material-ui'
import RequestTable from '../components/RequestTable'
import AddIcon from '@material-ui/icons/Add';


class ItemizeGift extends Component {
	constructor(props) {
		super(props)
		this.state= {items:[], name:"", num:0, unit:"", price:0}
	}

	render() {

		const updateSection = (section, isPosNum=false) => event => {
			let value = event.target.value
			if (isPosNum) {
				value = Math.max(parseInt(value, 10), 0)
			}
			if (event.target.value !== undefined) {
				this.setState({[section]: value})
			}
		}
		const addItem = event => {
			const item = {
				item: this.state.name,
				num: this.state.num,
				unit: this.state.unit,
				price: this.state.price
			}
			this.setState({name:"",
							num:0,
							unit:"",
							price:0,
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
					<TextField placeholder="Milk" onChange={updateSection("name")} value={this.state.name}/>
					<FormHelperText>Name of Good</FormHelperText>
				</FormControl>
				<FormControl >
					<TextField type="number" onChange={updateSection("num", true)} value={this.state.num}/>
					<FormHelperText>Quantity</FormHelperText>
				</FormControl>
				<FormControl>
					<TextField placeholder="Liter" onChange={updateSection("unit")} value={this.state.unit}/>
					<FormHelperText>Unit</FormHelperText>
				</FormControl>
				<FormControl >
					<TextField type="number" onChange={updateSection("price", true)} value={this.state.price}/>
					<FormHelperText>Price per unit</FormHelperText>
				</FormControl>

				<Button onClick={addItem} mini variant="fab" color="primary" aria-label="add"><AddIcon /></Button>

			</div>
			<div>
				<TextField label="Estimated Cost of Goods"/>
			</div>
			{requestsSection()}
		</div>
		)
	}
}


export default ItemizeGift;


