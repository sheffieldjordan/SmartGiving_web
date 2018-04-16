import React from 'react';
import ReactDOM from 'react-dom';
import './style/Components.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {store} from './RootStore'


window.React = React


ReactDOM.render(

	<App store={store}/>,

	document.getElementById('root'));
registerServiceWorker();
