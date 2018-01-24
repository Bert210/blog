import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import Provider from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

import rootReducer from './reducer';

const reducers = combineReducers(rootReducer);

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
