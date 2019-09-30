
import React, { Component } from 'react';
import {connect} from 'react-redux';


class Feeling extends Component {
    state = {
        feeling: []
      }
    
      handleChange = (event) => {
        this.setState({
          feeling: event.target.value
        })
        console.log(event.target.value);
        
      }

handleClick = () => {
    this.props.dispatch({
        type: 'ADD_FEELING',
        payload: this.state.feeling
    })
    //go to Understanding.js
    this.props.history.push("/understanding");
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <h1>How are you feeling today?</h1>
        <h5>Feeling?</h5>
        <h6>Rate 1-5. 1 being very stresssed and 5 being great!</h6>
        <input  onChange={(event) => this.handleChange(event)}></input>
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
export default connect(putReduxStateOnProps)(Feeling);
