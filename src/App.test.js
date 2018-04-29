import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './RootStore'
import {FakeData} './backend/APIManager'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('not using fake data'), () => {
	assert.isNotTrue(FakeData)
}