import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import App from './components/App';
import BaseReducer from './reducers'

let store = createStore(BaseReducer);

render(<App />, document.getElementById('root'));
