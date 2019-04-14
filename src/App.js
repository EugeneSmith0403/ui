import React, { Component } from 'react';
import SignupPage  from './components/pages/SignupPage'
import {Route, Router} from 'react-router-dom'
import history from './history'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Route exact path="/signup" component={SignupPage} />
        </Router>
      </div>
    );
  }
}

export default App;
