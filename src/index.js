import React from 'react';
import ReactDOM from 'react-dom';
import './style/Components.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { createStore } from 'redux'
import {updateDrawer} from './redux/reducers'
import data from './data/user'



window.React = React

const initialState = {
	donationDrawerOpen: false,
	selectedCharity: {},
	...data
}

const store = createStore(
	updateDrawer,
	initialState
)

ReactDOM.render(

	<App store={store}/>,

	document.getElementById('root'));
registerServiceWorker();
