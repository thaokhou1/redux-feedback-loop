//fourth page

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Comments extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <h1>Any comments you want to leave?</h1>
        <h5>Comments</h5>
        <input placeholder="comments here"></input>
        <button>NEXT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Comments);
