import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
<<<<<<< HEAD
=======
import './style/Components.css';
>>>>>>> afcd2d5befa6f94a62361e4c016f02855f66e0a5
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
