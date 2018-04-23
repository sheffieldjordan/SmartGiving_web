import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';


import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepButton } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Badge from 'material-ui/Badge';

import Typography from 'material-ui/Typography';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';


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
  backButton: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  bigAvatar: {
    width: 65,
    height: 65,
    marginRight: 20,
  },
});

/*choose a merchant dialog window, content*/
const merchants = ['Art Supplies ($180)', 'Picasso ($185)', 'Artsit and Craftsman ($189)'];



/*Edit Profile and New Request buttons*/
function editProfile(event) {
  console.log(event.currentTarget.getAttribute('message'));
}

function newRequest(event) {
  console.log(event.currentTarget.getAttribute('message'));
}


/*Project Status timeline*/
function getSteps() {
  return ['Post request', 'Donor pledged', 'Merchants bided', 'Choose merchant', 'Donor paid', 'Verify delivery'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Post your request so it would be available for donors to see and pledge';
    case 1:
      return 'Step 2: A donor made their pledge';
    case 2:
      return 'Step 3: All merchants placed their bids';
    case 3:
      return 'Step 4: Choose a merchant';
    case 4:
      return 'Step 5: Donor is waiting for the bid you choose...';
    case 5: 
      return 'Step 6: Verify that the package arrived to you safe and sound';

    default:
      return 'Unknown step';
  }
}


class CharityHome extends Component {

  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set(),
  };


    totalSteps = () => {
    return getSteps().length;
  };

  isStepComplete(step) {
    return this.state.completed.has(step);
  }

  completedSteps() {
    return this.state.completed.size;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps() ;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }



/*Project status timeline buttons*/
  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleComplete = () => {
    if(this.state.activeStep === 3) {
	    	return (
	            <div>
	      	      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title">
			        <DialogTitle id="simple-dialog-title">Choose a merchant</DialogTitle>
			        <div>
			          <List>
			            {merchants.map(merchant => (
			              <ListItem button onClick={() => this.handleListItemClick(merchant)} key={merchant}>
			                <ListItemText primary={merchant} />
			              </ListItem>
			            ))}
			          </List>
			        </div>
			      </Dialog>
			    </div> 
	    		)
    }
    const completed = new Set(this.state.completed);
    completed.add(this.state.activeStep);
    this.setState({
      completed,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
    });
  };


/*choose merchant window, functions*/

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };
/*---*/

	render() {

    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

		return(
		<div>
			<NavBar/>
			<AppBar position="static" color="default">
				<Toolbar className = "title-bar">
					<h1>Charity's profile</h1>
				</Toolbar>
			</AppBar>

		<div className='charity-status-container'>
		
		{/*first half of the page*/}

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
		  <Button className={classes.button} onClick={editProfile} message="editing profile">
	        Edit Profile
	      </Button>
	      <Button className={classes.button} onClick={newRequest} message="creating new request">
	        New Request
	      </Button>

		</div>


		{/*second half of the page*/}

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



		  </div>

		      <div className={classes.root}>

		        {/*Stepper*/}

		        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
		          {steps.map((label, index) => {
		            const props = {};
		            const buttonProps = {};

		            return (
		              <Step key={label} {...props}>
		                <StepButton
		                  onClick={this.handleStep(index)}
		                  completed={this.isStepComplete(index)}
		                  {...buttonProps}
		                >
		                  {label}
		                </StepButton>
		              </Step>
		            );
		          })}
		        </Stepper>

		        <div>
		          {this.allStepsCompleted() ? (
		            <div>
		              <Typography className={classes.instructions}>
		                All steps completed. Congratulations with your successful campaign!
		              </Typography>
		              <Button onClick={this.handleReset}>Reset</Button>
		            </div>
		          ) : (

		            <div>
		              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

		              <div>
		                <Button
		                  disabled={activeStep === 0}
		                  onClick={this.handleBack}
		                  className={classes.button}
		                >
		                  Back
		                </Button>

		                <Button
		                  variant="raised"
		                  color="primary"
		                  onClick={this.handleNext}
		                  className={classes.button}
		                >
		                  Next
		                </Button>

		                {activeStep !== steps.length &&
		                  (this.state.completed.has(this.state.activeStep) ? (
		                    <Typography variant="caption" className={classes.completed}>
		                      Step {activeStep + 1} already completed
		                    </Typography>
		                  ) : (
		                    <Button variant="raised" color="primary" onClick={this.handleComplete}>
		                      {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
		                    </Button>
		                  ))}
		              </div>

		            </div>

		          )}
		        </div>

		      </div>
		  </div>
	    </div>
	    );

	  }
	}


export default withStyles(styles)(CharityHome);

