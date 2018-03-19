import React, { Component } from 'react';
import lorem from 'lorem-ipsum'
import RequestsTableExample from './RequestsTableExample'
import './App.css';


import Paper from 'material-ui/Paper';
import ProfileHeader from './components/ProfileHeader'

class App extends Component {
  render() {
    const paperStyle = {padding:20, marginTop:20}
    const requestsHeaderStyling = {marginLeft:0}

    const elevation = 3

    return (
      <div className="App">
        <ProfileHeader store={this.props.store}/>
        <div className = "user-story">
          <Paper elevation={elevation} style={paperStyle}>
          <h2>Our Story</h2>
          <div className="card-text-container">
            {lorem({count:10})}
          </div>
          </Paper>
        </div>
        <div className = "connect-container">
          <Paper elevation={elevation} style={paperStyle}>
          <h2>Learn More</h2>
          <div className = "card-text-container">
            <div className = "contact-container">
              <div className = "contact-name social-info">
                <span className="contact-name-title contact-title">Contact name: </span>Humberto Rodriguez
              </div>
              <div className = "contact-email social-info">
                <span className="contact-email-title contact-title">Contact email: </span>humbertorodriguez12@gmail.com
              </div>
            </div>
            <div className = "social-container">
              <div className = "website-container social-info">
                <a href="google.com">Website</a>
              </div>
              <div className = "facebook-container social-info">
                <a href="facebook.com">Facebook</a>
              </div>
              <div className = "instagram-container social-info">
                <a href="instagram.com">Instagram</a>
              </div>
              <div className = "twitter-container social-info">
                <a href="twitter.com">Twitter</a>
              </div>
          </div>
          </div>
          </Paper>
        </div>
        <div className = "open-requests requests-section">
          <h2 style={requestsHeaderStyling} className = "requests-title">Open Requests</h2>
          {RequestsTableExample()}
        </div>
        <div className = "closed-requests requests-section">
          <h2 style={requestsHeaderStyling}className = "requests-title">Closed Requests</h2>
          {RequestsTableExample()}
        </div>

      </div>
    );
  }
}

export default App;
