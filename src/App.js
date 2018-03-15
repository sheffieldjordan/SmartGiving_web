import React, { Component } from 'react';
import lorem from 'lorem-ipsum'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <h1>Ayudelos</h1>
          <h3>Ciudad de Mexico, Mexico</h3>
        </header>
          <h2>Our Story</h2>
          <p>
            {lorem({count:10})}
          </p>
          <div className = "connect-container">
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
      </div>
    );
  }
}

export default App;
