import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch // Displays the first route that matches
} from 'react-router-dom'

import ProfilePage from './containers/ProfilePage'
import About from './containers/About'
import Home from './containers/Home'
import Whoops404 from './containers/Whoops404'

import './App.css';

class App extends Component {
  render() {
    return (
    <HashRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={() => <ProfilePage store={this.props.store}/>} />
          <Route component={Whoops404} />
        </Switch>
      </div>
    </HashRouter>
    )
  }
}

export default App;
