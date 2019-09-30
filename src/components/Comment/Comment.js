import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comment extends Component {
    state = {
        comments: []
      }
    
      handleChange = (event) => {
        this.setState({
            comments: event.target.value
          })
        console.log(event.target.value);
        
      }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_COMMENT',
            payload: this.state.comments
        })
        //go to Review.js
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
        <input placeholder="comments here" onChange={(event) => this.handleChange(event)}></input>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Comment);
