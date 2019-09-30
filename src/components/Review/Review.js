// fifth page

import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Review extends Component {
    handleClick = () => {
        //go to Completed.js
        this.props.history.push("/completed");
    }
    render(){
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
        <button onClick={this.handleClick}>SUBMIT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Review);
