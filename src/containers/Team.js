import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import NavBar from '../components/NavBar';

import Nat from '../images/Nat.png';
import Morgan from '../images/Morgan.png';
import Liz from '../images/lizlee.png';
import Gabe from '../images/gabe.png';
import Sel from '../images/Sel.png'; 

import ischoolLogo from '../images/berkeleyischool-logo-blue.svg';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  intro: {
    width: '60%',
    margin: 40,
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  container: {
  	display: 'flex',
  	flexWrap: 'wrap',
  	justifyContent: 'space-around',
  },
  bigAvatar: {
    width: 150,
    height: 150,
    margin: 20,
  },
  caption: {
    width: 150,
    margin: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  logo: {
  	width: '20%',
  	height: '10vh',
  	marginLeft: 40,
  }
}); 

class Team extends Component {
// @Natasha write your code here
  render() {

	const { classes } = this.props;

    return (

		<div>
			<NavBar title="Team"/>
				<div className={classes.container}>
					<div className={classes.intro}>
						<Typography variant="subheading" className={classes.container}>
						We created and submitted the SmartGiving blockchain-based web application as our final project at University of California, Berkeley, School of Information. Quite a few people were involved in the process, so we are going to thank them after we present the core team:  
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
					
					<div className={classes.intro}>
						<Typography variant="subheading">
						<span>
						We thank our adviser professor <a href="https://www.ischool.berkeley.edu/people/steven-weber"  style={{textDecoration: 'none', color: '#343535'}}>Steven Weber</a> and 
						our  second adviser professor <a href="https://www.ischool.berkeley.edu/people/doug-tygar"  style={{textDecoration: 'none', color: '#343535'}}> Doug Tygar</a>. 
						In the research process, we interviewed a lot of great people who also deserve a mention. 
						Carolyn Acosta from <a href="https://www.cigarra.org"  style={{textDecoration: 'none', color: '#343535'}}><i>Cigarra Foundation</i></a>, Colombia, 
						Ana Elenis from <i>Fundación de Ayuda al Debil Mental</i>, and Humberto who runs <i>Unidos por gratitud AC</i>, both in Mexico, 
						- thank you, guys! Your important work was the inspiration behind this project. 
						We would also like to thank our UC Berkeley peers - students who participated in surveys and helped build the product. 
						Bonney Ruan, thank you for helping to code this and for the amazing characters that you created for our "How it works" animation.
						Steve Trush, Jolijn van de Laar, and Justin Duan - your were a great aid in the usability testing.
						Finally, Edward Yip - we shall thank you for our logo. If it weren't for you, we wouldn't probably even create one!
						</span>    
						</Typography>
					</div>
				</div>

				<div>
					<Paper style={{height: '10vh'}}>
						<div className={classes.container}>
						<img src={ischoolLogo} alt='I School Logo' className={classes.logo}/>
						<Typography style={{margin: 'auto'}}>
						102 South Hall #4600, Berkeley, CA 94720-4600
						</Typography></div>
					</Paper>
				</div>
		</div>

    )
  }
}

export default withStyles(styles)(Team)

