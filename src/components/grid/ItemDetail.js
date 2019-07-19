import React from 'react'
import TripForm from './../../components/forms/TripForm'
import {updateTripRequest, deleteTripRequest} from './../../actions/trip'
import { connect } from "react-redux";
//TODO create action getOneTrip

//TODO CHECK TOKEN
const checkEnabled = (email, currentTrip) => {
  return email === currentTrip.owner.email;
}
const ItemDetail = (props) => {
  const match = props.match
  const id = match.params.hash;
  const {trip} = props
  let currentTrip = (trip || []).filter((item, index)=>{
    return item._id === id;
  })[0];

  return currentTrip ? <TripForm
    id={id}
    submit={props.update}
    deleteItem={props.delete}
    isEnabled={checkEnabled(props.userEmail, currentTrip)}
    trip={currentTrip}/> : 'somethings wrong'
}


export default connect(null, {update: updateTripRequest, delete: deleteTripRequest})(ItemDetail)
