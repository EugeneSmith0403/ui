import React, { Component } from "react";
import GuestRoute from "./components/permissions/GuestRoute";
import UserRoute from "./components/permissions/UserRoute";
import PendingConfirmRoute from "./components/permissions/PendingConfirmRoute";
import SignupPage from "./components/pages/SignupPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";

import SearchTripPage from "./components/pages/SearchTripPage";
import OwnTripPage from "./components/pages/OwnTripPage";
import BookingPage from "./components/pages/BookingPage";
import CreateTripPage from "./components/pages/CreateTripPage";

import ItemDetail from "./components/grid/ItemDetail";

import ConfirmEntrancePage from "./components/pages/ConfirmEntrancePage";
import ProfilePage from "./components/pages/ProfilePage";
import SideMenu from "./components/nav/SideMenu";
import { Route, Router } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import history from "./history";
import UserErrors from "./components/errors/userErrors";
import { connect } from "react-redux";
import { fetchUserRequest } from "./actions/auth";
import Loader from "react-loader";
import TopMenu from "./components/nav/TopMenu";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  componentWillMount() {
    if (this.props.isAuthenticated) this.props.fetchUser();
  }
  render() {
    return (
      <div className="ui">
        <div className="container">
          <TopMenu />
        </div>{" "}
        <Loader loaded={this.props.loaded}>
          <Grid>
            <UserErrors />
            <Grid.Row>
              <Grid.Column center>
                <div className="ui container">
                  <Router history={history}>
                    <GuestRoute exact path="/" component={HomePage} />{" "}
                    <UserRoute path="/profile" component={ProfilePage} />{" "}
                    <UserRoute
                      path="/search-trips"
                      component={SearchTripPage}
                    />
                    <UserRoute path="/search-trips" component={SearchTripPage}>
                      <UserRoute
                        path="/search-trips/:hash"
                        component={ItemDetail}
                      />{" "}
                    </UserRoute>
                    <UserRoute path="/create-trip" component={CreateTripPage} />
                    <UserRoute path="/own-trips" component={OwnTripPage} />{" "}
                    <UserRoute path="/booking" component={BookingPage} />{" "}
                    <GuestRoute path="/signup" component={SignupPage} />{" "}
                    <GuestRoute path="/login" component={LoginPage} />{" "}
                    <PendingConfirmRoute
                      path="/confirmEntrance/:hash"
                      component={ConfirmEntrancePage}
                    />{" "}
                  </Router>{" "}
                </div>{" "}
              </Grid.Column>{" "}
            </Grid.Row>{" "}
          </Grid>{" "}
        </Loader>{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.email,
    loaded: state.user.loaded
  };
};

export default connect(
  mapStateToProps,
  {
    fetchUser: fetchUserRequest
  }
)(App);
