import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import Palmira from '../images/test_colombian.jpg';
import "../style/Components.css";


const styles = theme => ({
  root: {
    width: '90%',
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  bigAvatar: {
    width: 65,
    height: 65,
    marginRight: 20,
  },
});



class CharityHomeTop extends Component {
	render() {
	const { classes } = this.props;
		return(
		<div>
			<div className='charity-status-heading'>
		      <Avatar
		        alt="Palmira Elementary"
		        src={Palmira}
		        className={classes.bigAvatar}/>
				<Typography variant="display3">
				Hello, Palmira Elementary!
				</Typography>
			</div>
			
			<div className='profile'>
			  <Button className={classes.button} href="#/profile">
		        Edit Profile
		      </Button>
		      <Button className={classes.button} href="#/createrequest">
		        New Request
		      </Button>
			</div>
		</div>
		);
	}
}

export default withStyles(styles)(CharityHomeTop)
