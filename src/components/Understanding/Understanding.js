
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: ''
  }

  handleChange = (event, keyName) => {
    this.setState({
      understanding: event.target.value
    })
  }

  handleClick = () => {
    if (this.state.understanding === ''){
      alert('You must fill out the understanding field.')
  }
  else {
    this.props.dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: this.state.understanding
    })
    //go to Support.js
    this.props.history.push("/support");
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <h1>How well are you understanding the content?</h1>
        <h5>Understanding?</h5>
        <h6>Rate 1-5. 1 being I'm totally lost and 5 being I got this!</h6>
        <input type="Number" onChange={(event) => this.handleChange(event)}></input>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
})
export default connect(putReduxStateOnProps)(Understanding);
