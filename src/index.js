import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const nextReducer = (state = {}, action) => {
    // Add to the order in the store
    if (action.type === 'SET_REVIEW') {
      return {...state, ...action.payload};
    }
    return state;
}

const reduxStore = createStore(
    // use combineReducers in case we add more later
   nextReducer
  );

  

ReactDOM.render(
    // make the store available to the entire app
    <Provider store={reduxStore}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  