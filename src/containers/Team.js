import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import NavBar from '../components/NavBar';
import "../style/Components.css";

import Nat from '../images/Nat.png';
import Morgan from '../images/Morgan.png';
import Liz from '../images/lizlee.png';
import Gabe from '../images/gabe.png';
import Sel from '../images/Sel.png'; 


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
  container: {
  	width:'90%',
  	display: 'flex',
  	align: 'center',
  },
  bigAvatar: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  caption: {
    width: 200,
    marginBottom: 20,
    textAlign: 'center',
  }
}); 

class Team extends Component {
// @Natasha write your code here
  render() {

	const { classes } = this.props;

    return (

		<div>
			<NavBar title="Team"/>


			<div>
			<Typography variant="display1">
			We created and submitted the SmartGiving blockchain-based web application as our final project at University of California, Berkeley, School of Information. Quite a few people were involved into the process, so we are going to thank them after we present the core team.  
			</Typography>
			</div>

			<div className={classes.container}>
			<span className={classes.margin}>
		      <Avatar
		        alt="Morgan"
		        src={Morgan}
		        className={classes.bigAvatar}/>
				<Typography variant="headline" className={classes.caption}>
				Morgan Jordan
				</Typography>
			</span>

			<span className={classes.margin}>
		      <Avatar
		        alt="Gabe"
		        src={Gabe}
		        className={classes.bigAvatar}/>
				<Typography variant="headline" className={classes.caption}>
				Gabriel Nicholas
				</Typography>
			</span>

			<span className={classes.margin}>
		      <Avatar
		        alt="Sel"
		        src={Sel}
		        className={classes.bigAvatar}/>
				<Typography variant="headline" className={classes.caption}>
				Selenne Berthely
				</Typography>
			</span>

			<span className={classes.margin}>
		      <Avatar
		        alt="Liz"
		        src={Liz}
		        className={classes.bigAvatar}/>
				<Typography variant="headline" className={classes.caption}>
				Liz (Hyemin) Lee
				</Typography>
			</span>

			<span className={classes.margin}>
		      <Avatar
		        alt="Nat"
		        src={Nat}
		        className={classes.bigAvatar}/>
				<Typography variant="headline" className={classes.caption}>
				Natalia Timakova
				</Typography>
			</span>
			</div>






		</div>

    )
  }
}

export default withStyles(styles)(Team)

