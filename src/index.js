import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const feedback = 
    {
        newFeeling: '',
        newUnderstanding: '',
        newSupport: '',
        newComments: ''
    }

const nextReducer = (state = feedback, action) => {
  //add feedback to store
  switch (action.type) {
    case 'ADD_FEELING': 
        state.newFeeling = action.payload
        return state;
    case 'ADD_UNDERSTANDING':
        state.newUnderstanding = action.payload
        return state;
    case 'ADD_SUPPORT':
        state.newSupport = action.payload;
        return state;
    case 'ADD_COMMENT':
        state.newComment = action.payload;
        return state;
    default:
        return state;
}
}

const grabFeedback = (state = [], action) => {
  if (action.type === 'GET_FEEDBACK') {
    return action.payload;
  } 
  return state;
}


const reduxStore = createStore(
    // use combineReducers in case we add more later
    combineReducers({
     nextReducer,
     grabFeedback,
  }), 
  );

  

ReactDOM.render(
    // make the store available to the entire app
    <Provider store={reduxStore}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  