import React, { Component } from 'react';
import Button from 'material-ui/Button';
import UpIcon from "@material-ui/icons/ArrowUpward"



class ScrollAllWayUp extends Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <Button variant="fab" color="primary" title='Back to top' style={{margin: '30px'}} 
               onClick={ () => { this.scrollToTop(); }}>
                <UpIcon/>
              </Button>;
   }
} 


export default ScrollAllWayUp





