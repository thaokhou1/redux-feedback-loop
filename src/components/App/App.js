import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


//importing components for routes
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Completed from '../Completed/Completed';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <br/>
        <Route exact path="/" component={Feeling}/>
        <Route exact path="/understanding" component={Understanding}/>
        <Route exact path="/support" component={Support}/>
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/completed" component={Completed} />
      </div>
      </Router>
    );
  }
}

export default App;
