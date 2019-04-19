import React, { Component } from 'react';
import GuestRoute from './components/permissions/GuestRoute'
import UserRoute from './components/permissions/UserRoute'
import PendingConfirmRoute from './components/permissions/PendingConfirmRoute'
import SignupPage  from './components/pages/SignupPage'
import HomePage  from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage'
import ConfirmEntrancePage from './components/pages/ConfirmEntrancePage'
import {Route, Router} from 'react-router-dom'
import history from './history'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <GuestRoute exact path="/" component={HomePage} />
          <GuestRoute path="/signup" component={SignupPage} />
          <GuestRoute path="/login" component={LoginPage} />
          <PendingConfirmRoute path="/confirmEntrance/:hash" component={ConfirmEntrancePage} />
        </Router>
      </div>
    );
  }
}

export default App;
