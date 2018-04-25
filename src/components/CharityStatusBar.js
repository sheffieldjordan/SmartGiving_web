import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepButton } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import "../style/Components.css";

const styles = theme => ({
  root: {
    width: '90%',
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
});

/*Project Status timeline*/
function getSteps() {
  return ['Post request', 'Donor pledged', 'Merchants bidded', 'Choose merchant', 'Donor paid', 'Verify delivery'];
}

function getStep(step) {
  return ['Post request', 'Donor pledged', 'Merchants bidded', 'Choose merchant', 'Donor paid', 'Verify delivery'][step];
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



class CharityStatusBar extends Component {
	state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set(),
    isDrawerOpen: false,
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


	render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

		return(

			  <div className={classes.root}> 
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
		                      {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : getStep(activeStep)}
		                    </Button>
		                  ))}
		              </div>

		            </div>

		          )}
		        </div>

		      </div>

			)
	} 


}

export default withStyles(styles)(CharityStatusBar)
