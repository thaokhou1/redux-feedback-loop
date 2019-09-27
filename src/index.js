import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state = {}, action) => {
  console.log('hello ');
  
  }

const reduxStore = createStore(
    // use combineReducers in case we add more later
    combineReducers({
      reducer
    }),
    // log reduxStore details to console
    // applyMiddleware(logger)
  );

  

ReactDOM.render(
    // make the store available to the entire app
    <Provider store={reduxStore}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  