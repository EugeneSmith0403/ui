import React, { PureComponent } from "react";
import ProfileForm from "./../forms/ProfileForm";
import { connect } from "react-redux";
import { updateProfileRequest } from "./../../actions/user";
import PropTypes from "prop-types";
import GridView from "./../grid/GridView";
import { searchTripRequest, resetTripAction } from "./../../actions/trip";

const getOwnerTrips = (trip, userEmail) => {
  let currentTrip = trip.filter((item, index) => {
    return item.owner.email === userEmail;
  });
  return currentTrip;
};

class OwnTripPage extends PureComponent {
  componentDidMount() {
    //getTripByUser
    //      this.props.searchTrip()
  }
  render() {
    const trips = getOwnerTrips(this.props.trip, this.props.userEmail);
    return (
      <div>
        <h1>Own trip page</h1>
        <GridView data={trips} match={this.props.match.path} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trip: state.trip && state.trip.trip,
    router: state.router,
    userEmail: state.user.email
  };
};

export default connect(
  mapStateToProps,
  { searchTrip: searchTripRequest }
)(OwnTripPage);
