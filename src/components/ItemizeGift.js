import React, { Component } from 'react';

import {TextField, Button, FormControl, FormHelperText, InputAdornment} from 'material-ui'
import RequestTable from '../components/RequestTable'
import AddIcon from '@material-ui/icons/Add';


class ItemizeGift extends Component {
	constructor(props) {
		super(props)
		this.state = {name:"", num:"", price:"", items:this.props.gift.items}
	}

	render() {

		const updateSection = (section, isPosNum=false) => event => {
			let value = event.target.value
			if (isPosNum) {
				value = Math.max(parseInt(value, 10), 0)
				if (isNaN(value)) value = ""
			}
			if (event.target.value !== undefined) {
				this.setState({[section]: value})
			}
		}
		const addItem = event => {
			const item = {
				name: this.state.name,
				num: this.state.num,
				price: this.state.price
			}
			this.setState({name:"",
							num:"",
							price:"",
							items:[...this.state.items, item]}, () => {
								this.props.onUpdate({items:this.state.items})
							})
		}


		const requestsSection = () => {
			if (this.state.items.length === 0) {
				return (<div/>)
			} else {
				return (<RequestTable titles ={["Name", "Quantity", "Price per unit"]} data={this.state.items}/>)
			}
		}

		const totalCost = () => {
			return this.state.items.reduce((total, currentItem) => {
				return total + currentItem.price * currentItem.num
			}, 0)
		}

		return (
		<div className = "itemize-container">
			<div className = "itemize-description"> Add items that you would like to request in your gift. This will be looked at by merchants to determine whether or not they can fulfill it.</div>
			<div className = "itemize-add-item-container">
				<FormControl className = "itemize-name-of-good">
					<TextField placeholder="Packages of socks" onChange={updateSection("name")} value={this.state.name}/>
					<FormHelperText>Name of Good</FormHelperText>
				</FormControl>
				<FormControl >
					<TextField placeholder = "5" type="number" onChange={updateSection("num", true)} value={this.state.num}/>
					<FormHelperText>Quantity</FormHelperText>
				</FormControl>
				<FormControl >
					<TextField placeholder = "12" type="number" onChange={updateSection("price", true)} value={this.state.price}
                      InputProps={{
                        classes: { root: "donation-text-field" },
                        startAdornment: (
                          <InputAdornment
                            className="donation-text-field"
                            position="start"
                          >
                            $
                          </InputAdornment>
                        )}}
                    />
				<FormHelperText>Price per unit</FormHelperText>
				</FormControl>

				<Button onClick={addItem} mini variant="fab" color="primary" aria-label="add"><AddIcon /></Button>

			</div>
			{requestsSection()}
			<div className = "itemize-estimated-cost">
				Estimated total cost: <span className = "itemize-total-dollars">${totalCost()} USD</span>
			</div>

		</div>
		)
	}
}


export default ItemizeGift;


