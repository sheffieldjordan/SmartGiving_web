import React, { Component } from 'react';

import ProfileHeader from '../components/ProfileHeader'
import UserStory from '../components/UserStory'
import ContactInfo from '../components/ContactInfo'
import RequestsTableExample from '../RequestsTableExample'

class ProfilePage extends Component {
  render() {
    return (
      <div className="App">
        <ProfileHeader store={this.props.store}/>
        <UserStory store={this.props.store}/>
        <ContactInfo store={this.props.store}/>

        <div className = "open-requests requests-section">
          <h2 className = "requests-title">Open Requests</h2>
          {RequestsTableExample()}
        </div>
        <div className = "closed-requests requests-section">
          <h2 className = "requests-title">Closed Requests</h2>
          {RequestsTableExample()}
        </div>

      </div>
    );
  }
}
export default ProfilePage;