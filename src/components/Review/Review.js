import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Review extends Component {
    //post to server
    handlePost = () => {
        console.log(this.props.reduxState.nextReducer)
        axios.post('/api/feedback', this.props.reduxState.nextReducer)
        .then( (response) => {
          console.log(response.data);
        })
        .catch( (error) => {
          console.log('ERROR IN POST', error);
        })
      }
    
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
           <h4>Feeling: {this.props.reduxState.nextReducer.newFeeling}</h4>
           <h4>Understanding: {this.props.reduxState.nextReducer.newUnderstanding}</h4>
           <h4>Support: {this.props.reduxState.nextReducer.newSupport}</h4>
           <h4>Comments: {this.props.reduxState.nextReducer.newComment}</h4>
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
