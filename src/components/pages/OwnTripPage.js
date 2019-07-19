import React, { PureComponent } from "react";
import ProfileForm from "./../forms/ProfileForm";
import { connect } from "react-redux";
import { updateProfileRequest } from "./../../actions/user";
import PropTypes from "prop-types";
import GridView from "./../grid/GridView";
import { revieveUserTripsRequest, resetTripAction } from "./../../actions/trip";
import {makeGetTrips} from './../../selectors/trips'

//TODO REMAKE and get rid of dublicate logics and methods by creating HOC
class OwnTripPage extends PureComponent {
  state = {
    isVisibleSearchForm: true
  }
  componentDidMount() {
    const email = this.props.userEmail
    if(email) {
      this.props.getOwnerTrips(email)
      this.setState({
        isVisibleSearchForm: !this.isRoutingHash()
      })
    }
  }
  isRoutingHash = () => {
    const {pathname} =  this.props.router.location;
    return !!pathname.split('/')[2];
  }
  componentDidUpdate(prevProps) {
    const isRoutingHash = this.isRoutingHash();
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        isVisibleSearchForm: !isRoutingHash
      })
    }
    // if(prevProps.location.pathname !== this.props.location.pathname && !isRoutingHash) {
    //   this.props.resetTrip()
    // }
  }
  render() {
    return (
      <div>
        <h1>Own trip page2</h1>
        {
          this.state.isVisibleSearchForm &&
            <GridView
              data={this.props.ownerTrip}
              match={this.props.match.path}/>
        }
      </div>
    );
  }
}



const mapStateToProps = () => {
 const getTripState = makeGetTrips()
 const mapStateToProps = (state, props) => {
   return {
      ownerTrip: getTripState(state),
      router: state.router,
      userEmail: state.user.email
   }
  }
 return mapStateToProps
}


export default connect(
  mapStateToProps,
  { getOwnerTrips: revieveUserTripsRequest }
)(OwnTripPage);
