import React from 'react';
import ReactDOM from 'react-dom';
import './style/Components.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { createStore } from 'redux'
import {showDonationDrawer} from './redux/reducers'
import data from './data/user'




window.React = React

const initialState = {
	donationDrawerOpen: false,
	...data
}

const store = createStore(
	showDonationDrawer,
	initialState
)

ReactDOM.render(

	<App store={store}/>,

	document.getElementById('root'));
registerServiceWorker();
