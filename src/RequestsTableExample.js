import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const RequestsTableExample = () => (
  <Table displayRowCheckbox={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={true}>
      <TableRow>
        <TableHeaderColumn>Items Requested</TableHeaderColumn>
        <TableHeaderColumn>Cost</TableHeaderColumn>
        <TableHeaderColumn>Merchant</TableHeaderColumn>
        <TableHeaderColumn>Expiration</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>60 pairs of socks</TableRowColumn>
        <TableRowColumn>$16.60</TableRowColumn>
        <TableRowColumn><a href="google.com">The Clothing Emporium</a></TableRowColumn>
        <TableRowColumn>March 25, 2018</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Fifty cabbages</TableRowColumn>
        <TableRowColumn>$31.00</TableRowColumn>
        <TableRowColumn><a href="google.com">Garbo's Grocers</a></TableRowColumn>
        <TableRowColumn>March 31, 2018</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>A cord of wood</TableRowColumn>
        <TableRowColumn>$50.00</TableRowColumn>
        <TableRowColumn>Awaiting merchant bid</TableRowColumn>
        <TableRowColumn>April 15, 2018</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default RequestsTableExample;