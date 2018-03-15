import React, { Component } from 'react';
import lorem from 'lorem-ipsum'
import RequestsTableExample from './RequestsTableExample'
import './App.css';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

class App extends Component {
  render() {
    const avatarStyle = {"marginRight":10}
    const paperStyle = {padding:20, marginTop:20}

    return (
    <MuiThemeProvider>
      <div className="App">
        <header style={{"marginBottom" : 20}}>
          <div className = "user-info-header">
            <Avatar size={70} style={avatarStyle}>A</Avatar>
            <div className = "user-info-text">
              <h1 className="charity-title">Ayudelos</h1>
              <div className="charity-subtitle">Ciudad de Mexico, Mexico</div>
            </div>
          </div>
        </header>
        <div className = "user-story">
          <Paper zDepth={1} style={paperStyle}>
          <h2>Our Story</h2>
          <div className="card-text-container">
            {lorem({count:10})}
          </div>
          </Paper>
        </div>
        <div className = "connect-container">
          <Paper zDepth={1} style={paperStyle}>
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
        <div className = "open-requests">
          {RequestsTableExample()}
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
