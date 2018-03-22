import React, { Component } from 'react';

import ProfileHeader from './components/ProfileHeader'
import About from './components/About'
import UserStory from './components/UserStory'
import ContactInfo from './components/ContactInfo'
import RequestsTableExample from './RequestsTableExample'

import './App.css';

// TODO: Remove this hacky way to show the about page
var showAbout = false;

class App extends Component {
  render() {
    if (showAbout) {
      return (<About/>)
    }    
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

export default App;
