import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {kStyleElevation, kStylePaper} from '../style/styleConstants'
// import PaperStyled from './material/PaperStyled'

class UserStory extends Component {
	render() {
		return (
        <div className = "user-story">
          <Paper elevation={kStyleElevation} style={kStylePaper}>
          <h2>Our Story</h2>
          <div className="card-text-container">
            {this.props.store.getState().globalData.user.story}
          </div>
          </Paper>
        </div>
		)
	}
}

export default UserStory