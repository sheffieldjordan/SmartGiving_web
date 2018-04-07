import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';


/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const RequestsTableExample = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Items Requested</TableCell>
        <TableCell>Cost</TableCell>
        <TableCell>Merchant</TableCell>
        <TableCell>Expiration</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>60 pairs of socks</TableCell>
        <TableCell>$16.60</TableCell>
        <TableCell><a href="google.com">The Clothing Emporium</a></TableCell>
        <TableCell>March 25, 2018</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Fifty cabbages</TableCell>
        <TableCell>$31.00</TableCell>
        <TableCell><a href="google.com">Garbo's Grocers</a></TableCell>
        <TableCell>March 31, 2018</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>A cord of wood</TableCell>
        <TableCell>$50.00</TableCell>
        <TableCell>Awaiting merchant bid</TableCell>
        <TableCell>April 15, 2018</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default RequestsTableExample;