import React, {Component} from 'react'
import ItemTrip from './ItemTrip'
import {connect} from 'react-redux'
import TableView from './../table'
import {oneTripRequest} from './../../actions/trip'
//TODO create action getOneTrip
const ItemDetail = (props) => {
  const match = props.match
  const id = match.params.hash;
  props.getOneTrip(id)

  const currentTrip = (props.trip || []).filter((item, index)=>{
    return item._id === id;
  })
  const dataRow = []
  const dataHeader = []

  return <TableView
    dataHeader={dataHeader}
    dataRow ={dataRow} />;

}


const mapStateToProps = (state) => {
  return {
    trip: state.trip && state.trip.trip
  }
}

export default connect(mapStateToProps, {getOneTrip: oneTripRequest})(ItemDetail)
