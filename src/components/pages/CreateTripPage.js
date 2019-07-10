import React, {Component} from 'react'
import TripForm from '../forms/TripForm'
import {connect} from 'react-redux'
import {createTripRequest} from './../../actions/trip'

const CreatedTripPage = ({create}) => {
  return (
      <div>
        <h1>Create Page</h1>
        <TripForm isEnabled={true} create={create} />

      </div>
  )
}

export default connect(null, { create: createTripRequest })(CreatedTripPage)
