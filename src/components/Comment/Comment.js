//fourth page

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Comment extends Component {
    handleClick = () => {
        //go to Understanding.js
        this.props.history.push("/review");
    }
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
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Comment);
