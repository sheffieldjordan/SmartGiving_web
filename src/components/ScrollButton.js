import React, { Component } from 'react';
import Button from 'material-ui/Button';
import DownIcon from '@material-ui/icons/ArrowDownward';


class ScrollDown extends Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    window.scroll(this.props.scrollStepInPx, 500);
  }


export default ScrollDown;




{/*<button id="scrollbutton">Some button to scroll down</button>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>
jQuery(document).ready(function($){
  $("#scrollbutton").on("click", function(){
    $('html, body').animate({"scrollTop": +100vh}, 1000);
  });
});
</script>

*/}
