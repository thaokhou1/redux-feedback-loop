import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: ''
  }

  handleChange = (event) => {
    this.setState({
      support: event.target.value
    })
  }

  handleClick = () => {
    if (this.state.support === ''){
      alert('You must fill out the support field.')
  }
  else {
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: this.state.support
    })
    //go to Comment.js
    this.props.history.push("/comment");
  }}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <h1>How well are you being supported?</h1>
        <h5>Support?</h5>
        <h6>Rate 1-5. 1 being I feel abandon and 5 being I feel supported!</h6>
        <input type="Number" onChange={(event) => this.handleChange(event)}></input>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Support);
