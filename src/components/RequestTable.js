import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import '../style/Components.css'

class RequestTable extends Component {
	render() {
		const data = this.props.data
		const titles = Object.keys(data[0]) // We're being naughty and assuming the first item as keys
		console.log(titles)
		return (
			<div>
			  <Table>
			    <TableHead>
			    	<TableRow>
			    	{titles.map((t, i) => {
			    		return <TableCell className="table-title-cell" key={i}>{t}</TableCell>
		    		})}
			    	</TableRow>
			    </TableHead>
			    <TableBody>
			    {data.map((d, i) => {
			    	let j = 0;
			    	return (
			    		<TableRow key={i}>
			    			{Object.values(d).map((v, j) => {
			    				return (<TableCell key={j}>{v}</TableCell>)
			    				})
			    			}
			    		</TableRow>
			    	)
			    })}
			    </TableBody>
			   </Table>
			</div>
			)
	}
}

RequestTable.propTypes = {
	data: PropTypes.array.isRequired
}

export default RequestTable