import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


// Redux
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';


const feedback = 
    {
        feeling: '',
        understanding: '',
        support: '',
        comments: ''
    }

const nextReducer = (state = feedback, action) => {
  //add feedback to store
  switch (action.type) {
    case 'ADD_FEELING': 
        state.feeling = action.payload
        return state;
    case 'ADD_UNDERSTANDING':
        state.understanding = action.payload
        return state;
    case 'ADD_SUPPORT':
        state.support = action.payload;
        return state;
    case 'ADD_COMMENT':
        state.comments = action.payload;
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
  