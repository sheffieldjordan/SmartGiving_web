import React, { Component } from 'react';

import NavBar from '../components/NavBar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import CharityHomeTop from '../components/CharityHomeTop';
import CharityStatusBar from '../components/CharityStatusBar';

import { withStyles } from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import Typography from 'material-ui/Typography';

import "../style/Components.css";



const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});


class CharityHome extends Component {

  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set(),
    isDrawerOpen: false,
  };

	render() {
    const { classes } = this.props;

		return(
		<div>

			<NavBar/>
			<AppBar position="static" color="default">
				<Toolbar className = "title-bar">
					<h1>Charity's profile</h1>
				</Toolbar>
			</AppBar>

		  <div className='charity-status-container'>
			{/*top half of the page*/}
			  <CharityHomeTop/>

			{/*bottom half of the page*/}
			  <div className='charity-status-requestName'>					  	
			  	<div className="status-bages">
				    <Badge color="secondary" badgeContent={2} className={classes.margin}>
		        	  <Typography className={classes.padding}>Requests made</Typography>
		      		</Badge>
		      		<Badge color="secondary" badgeContent={1} className={classes.margin}>
		        	  <Typography className={classes.padding}>Requests fulfilled</Typography>
		      		</Badge>
	      		</div>
			    <Typography variant="headline" gutterBottom alignleft='true' paragraph>
				  Status for Request "March Supplies for Children's Art Project"
				</Typography>
				<Typography variant="subheading" alignleft='true' paragraph>
				  Click on each status to see more information
				</Typography>
				<CharityStatusBar/>
			  </div>
		  </div>
	    </div>
	    );

	  }
	}


export default withStyles(styles)(CharityHome);

