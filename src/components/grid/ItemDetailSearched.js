import React, {Component} from 'react'
import ItemTrip from './ItemTrip'
import {connect} from 'react-redux'
import TableView from './../table'
import {oneTripRequest} from './../../actions/trip'
import TripForm from './../../components/forms/TripForm'
import ItemDetail from './ItemDetail'

//TODO create action getOneTrip


const mapStateToProps = (state) => {
  return {
    trip: state.trip && state.trip.trip,
    userEmail: state.user.email
  }
}

export default connect(mapStateToProps, {getOneTrip: oneTripRequest})(ItemDetail)
