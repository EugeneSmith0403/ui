import React, {Component} from 'react'
import ItemTrip from './ItemTrip'
import {connect} from 'react-redux'
import TableView from './../table'
import {oneTripRequest} from './../../actions/trip'
//TODO create action getOneTrip

const getOneTripHelper = (props, id) => {
  return props.trip && !props.trip.length === 0 ? props.getOneTrip(id) : '';
}


const ItemDetail = (props) => {
  const match = props.match
  const id = match.params.hash;
  const {trip} = props
  let current = trip.filter((item, index)=>{
    return item._id === id;
  })

  console.log(current, '+==+=+=')



  return ''

}


const mapStateToProps = (state) => {
  return {
    trip: state.trip && state.trip.trip
  }
}

export default connect(mapStateToProps, {getOneTrip: oneTripRequest})(ItemDetail)
