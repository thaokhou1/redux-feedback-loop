// fifth page

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Review extends Component {
    state = {
        redirectHome : false,
        customer: []
      }
    handleClick = () => {
        this.setState({redirectHome: true})
      }
  render() {
    if (this.state.redirectHome) {
        return <Redirect to="/" />
      }
    return (
      <div className="App">
        <header>
          <h1>Review Your Feedback</h1>
        </header>
        <br/>
       <div>
           <h4>Feeling:</h4>
           <h4>Understanding:</h4>
           <h4>Support:</h4>
           <h4>Comments:</h4>
       </div>
        <input placeholder="comments here"></input>
        <button onClick={this.handleClick}>SUBMIT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Review);
