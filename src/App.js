import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HashRouter,
  Route,
  Switch // Displays the first route that matches
} from "react-router-dom";

import { ParallaxProvider } from "react-skrollr";

import ProfilePage from './containers/ProfilePage'
import Home from './containers/Home'
import Howitworks from './containers/Howitworks'
import Whoops404 from './containers/Whoops404'
import CharityHome from './containers/CharityHome'
import DonorHome from './containers/DonorHome'
import MerchantHome from './containers/MerchantHome'
import CreateRequest from './containers/CreateRequest'
import ThankYou from './containers/ThankYou'
import GiftPage from './containers/GiftPage'
import GetAllStats from './ethereum/components/GetAllStats'
import SelectMerchant from './containers/SelectMerchant'
import ItemSent from './ethereum/components/ItemSent'
import ItemReceived from './ethereum/components/ItemReceived'
import GetActiveGifts from "./containers/GetActiveGifts";
import Team from './containers/Team'


import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
    	light: "#49BBFF",
    	main: "#317EAC",
    	dark: "#245D7F",
    	contrastText: 'white',
    },
    secondary: {
    	light: "#FFBB49",
    	main: "#EDAE44",
    	dark: "#7F5E25",
    	contrastText: 'white',
    },
  },
  status: {
    danger: 'orange',
  },



});


class App extends Component {
	render() {
		return (
		  <MuiThemeProvider theme={theme}>
			<ParallaxProvider
				init={{
					smoothScrolling: true,
					smoothScrollingDuration: 1000,
					forceHeight: false
				}}
			>
				<HashRouter>
					<div className="main">
						<Switch>
							<Route
								exact
								path="/"
								component={Home} />

							<Route path="/home/team" component={Team} />

							<Route path="/home/howitworks" component={Howitworks} />

							<Route
								path="/profile"
								component={() => <ProfilePage store={this.props.store} />}
							/>

							<Route
								path="/home/donor"
								component={() => <DonorHome store={this.props.store} />}
							/>

							<Route
								path="/home/charity"
								component={() => <CharityHome store={this.props.store} />}
							/>

							<Route
								path="/home/merchant"
								component={() => <MerchantHome store={this.props.store} />}
							/>
							<Route
								path="/charity/:charityID/:userType"
								component={() => <GiftPage store={this.props.store} />}
							/>
							<Route
								path="/thanks"
								component={() => <ThankYou store={this.props.store} />}
							/>
							<Route
								path="/createrequest"
								component={() => <CreateRequest store={this.props.store} />}
							/>
							<Route
								path="/getallstats"
								component={() => <GetAllStats store={this.props.store} />}
							/>
							<Route
								path="/selectmerchant"
								component={() => <SelectMerchant store={this.props.store} />}
							/>
							<Route
								path="/itemsent"
								component={() => <ItemSent store={this.props.store} />}
							/>
							<Route
								path="/itemreceived"
								component={() => <ItemReceived store={this.props.store} />}
							/>
							<Route
								path="/getActiveGifts"
								component={() => <GetActiveGifts store={this.props.store} />}
							/>
							<Route component={Whoops404} />
						</Switch>
					</div>
				</HashRouter>
			</ParallaxProvider>
		  </MuiThemeProvider>
		)
	}
}

const mapStateToProps = state => {
  return state;
};

App = connect(mapStateToProps, null)(App);

export default App



