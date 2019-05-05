import React, {Component} from 'react'
import ProfileForm from './../forms/ProfileForm'
import {connect} from 'react-redux'
import {updateProfileRequest} from './../../actions/user'
import PropTypes from 'prop-types'
import SearchBar from './../searchBar'
import { Form, Button } from 'semantic-ui-react'
import SearchTripFrom from './../forms/SearchTripForm'

class SearchTripPage extends Component {

state = {
  data: {
    to: {},
    from: {}
  }
}

setCoodinatesTo = (value) => {
  this.setState({
    data: {
      ...this.state.data,
      to: value
    }
  })
}

setCoodinatesFrom = (value) => {
  this.setState({
    data: {
      ...this.state.data,
      from: value
    }
  })
}
getCoordinates = () => {
  const {from, to} = this.state.data
  return {
    to,
    from
  }
}
getTrips=()=> {
  //
  console.log(this.state.data, 'getTrips with range')
}

  render() {
    return (
      <div>
        <h1>SearchTripPage</h1>
          <SearchTripFrom
            onSubmit={this.getTrips}
            setCoodinatesFrom={this.setCoodinatesFrom}
            setCoodinatesTo={this.setCoodinatesTo}
            getCoordinates={this.getCoordinates}
          />
      </div>
    )
  }
}

SearchTripPage.propTypes  = {
  data: PropTypes.shape({
    to: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    }),
    from: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  })
}


export default SearchTripPage
