import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Review extends Component {
    //post to server
    handlePost = () => {
        axios.post('/api/feedback', this.props.reduxState.nextReducer,this.props.reduxState.feedback)
        .then( (response) => {
        })
        .catch( (error) => {
          console.log('ERROR IN POST', error);
        })
      }
    
    handleClick = () => {
        this.handlePost();
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
           <h4>Feeling: {this.props.reduxState.nextReducer.feeling}</h4>
           <h4>Understanding: {this.props.reduxState.nextReducer.understanding}</h4>
           <h4>Support: {this.props.reduxState.nextReducer.support}</h4>
           <h4>Comments: {this.props.reduxState.nextReducer.comments}</h4>
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
