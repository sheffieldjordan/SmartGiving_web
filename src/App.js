import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  HashRouter,
  Route,
  Switch // Displays the first route that matches
} from 'react-router-dom'

import { ParallaxProvider } from 'react-skrollr';


import ProfilePage from './containers/ProfilePage'
import About from './containers/About'
import Home from './containers/Home'
import Contact from './containers/Contact'
import Howitworks from './containers/Howitworks'
import Whoops404 from './containers/Whoops404'
import DonorHome from './containers/DonorHome'
import DonatePage from './containers/DonatePage'

class App extends Component {
  render() {
    return (
    <ParallaxProvider init={{smoothScrolling: true, smoothScrollingDuration: 1000, forceHeight: false}}>
    <HashRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={() => <DonorHome store={this.props.store}/>} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/howitworks" component={Howitworks}/>
          <Route path="/profile" component={() => <ProfilePage store={this.props.store}/>} />
          <Route path="/donor" component={() => <DonorHome store={this.props.store}/>} />
          <Route path="/donate" component={() => <DonatePage store={this.props.store}/>} />
          <Route component={Whoops404} />
        </Switch>
      </div>
    </HashRouter>
    </ParallaxProvider>

    )
  }
}

const mapStateToProps = state => {
  return state
}


App = connect(
  mapStateToProps,
  null
)(App)

export default App;
