import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import data from './data/user'

window.React = React

const placeholderReducer = (state = {}, action) => { return state}
const initialState = {
	...data
}

const store = createStore(
	placeholderReducer,
	initialState
)

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
