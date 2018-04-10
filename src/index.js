import React from 'react';
import ReactDOM from 'react-dom';
import './style/Components.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { createStore } from 'redux'
import {updateDrawer} from './redux/reducers'
import data from './data/user'
import requests from './data/requests'



window.React = React

const initialState = {
	donationDrawerOpen: false,
	selectedRequest: {},
	...data,
	...requests
}

const store = createStore(
	updateDrawer,
	initialState
)

ReactDOM.render(

	<App store={store}/>,

	document.getElementById('root'));
registerServiceWorker();
