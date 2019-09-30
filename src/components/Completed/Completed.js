import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Completed extends Component {
    //go back to homepage 
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
          <h1>Feedback</h1>
        </header>
        <br/>
       <div>
           <h4>Thank you!</h4>
       </div>
        <button onClick={this.handleClick}>Leave New Feedback</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Completed);
