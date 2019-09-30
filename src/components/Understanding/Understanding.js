//second page

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Understanding extends Component {
    handleClick = () => {
        //go to Support.js
        this.props.history.push("/support");
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <h1>How well are you understanding the content?</h1>
        <h5>Understanding?</h5>
        <input placeholder="rating"></input>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Understanding);
