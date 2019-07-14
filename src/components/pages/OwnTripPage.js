import React, { PureComponent } from "react";
import ProfileForm from "./../forms/ProfileForm";
import { connect } from "react-redux";
import { updateProfileRequest } from "./../../actions/user";
import PropTypes from "prop-types";
import GridView from "./../grid/GridView";
import { revieveUserTripsRequest, resetTripAction } from "./../../actions/trip";

// const getOwnerTrips = (trip, userEmail) => {
//   let currentTrip = trip.filter((item, index) => {
//     return item.owner.email === userEmail;
//   });
//   return currentTrip;
// };

class OwnTripPage extends PureComponent {
  componentWillMount() {
    const email = this.props.userEmail
    if(email) {
      this.props.getOwnerTrips(email)
    }
  }
  render() {
    // const trips = getOwnerTrips(this.props.trip, this.props.userEmail);
    return (
      <div>
        <h1>Own trip page</h1>
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
  { getOwnerTrips: revieveUserTripsRequest }
)(OwnTripPage);
