//third page

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Support extends Component {
    handleClick = () => {
        //go to Comment.js
        this.props.history.push("/comment");
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <h1>How well are you being supported?</h1>
        <h5>Support?</h5>
        <input placeholder="rating"></input>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Support);
