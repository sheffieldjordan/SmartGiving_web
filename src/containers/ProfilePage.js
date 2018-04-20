import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import NavBar from '../components/NavBar'
import ProfileHeader from '../components/ProfileHeader'
import UserStory from '../components/UserStory'
import ContactInfo from '../components/ContactInfo'
import RequestsTableExample from '../components/RequestsTableExample'

import {kStyleElevation, kStylePaper} from '../style/styleConstants'
import '../style/ProfilePage.css';

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="page-container">
          <ProfileHeader store={this.props.store}/>
          <UserStory store={this.props.store}/>
          <Paper elevation={kStyleElevation} style={kStylePaper}>
            <h2>Learn More</h2>
            <ContactInfo user={this.props.store.getState().user}/>
          </Paper>

          <div className = "open-requests requests-section">
            <h2 className = "requests-title">Open Requests</h2>
            {RequestsTableExample()}
          </div>
          <div className = "closed-requests requests-section">
            <h2 className = "requests-title">Closed Requests</h2>
            {RequestsTableExample()}
          </div>
        </div>
      </div>
    );
  }
}
export default ProfilePage;