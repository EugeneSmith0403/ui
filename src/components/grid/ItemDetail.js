import React, {Component} from 'react'
import ItemTrip from './ItemTrip'
import {connect} from 'react-redux'
import TableView from './../table'
import {oneTripRequest} from './../../actions/trip'
import TripForm from './../../components/forms/TripForm'
//TODO create action getOneTrip

const getOneTripHelper = (props, id) => {
  return props.trip && !props.trip.length === 0 ? props.getOneTrip(id) : '';
}


const checkEnabled = (email, currentTrip) => {
  return email === currentTrip.owner.email;
}

const ItemDetail = (props) => {
  const match = props.match
  const id = match.params.hash;
  const {trip} = props || []
  let currentTrip = trip.filter((item, index)=>{
    return item._id === id;
  })[0];
  return <TripForm
    isEnabled={checkEnabled(props.userEmail, currentTrip)}
    trip={currentTrip}/>
}


const mapStateToProps = (state) => {
  return {
    trip: state.trip && state.trip.trip,
    userEmail: state.user.email
  }
}

export default connect(mapStateToProps, {getOneTrip: oneTripRequest})(ItemDetail)
