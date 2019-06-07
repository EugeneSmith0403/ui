import React, {Component} from 'react'
import ProfileForm from './../forms/ProfileForm'
import {connect} from 'react-redux'
import {updateProfileRequest} from './../../actions/user'
import PropTypes from 'prop-types'
import SearchBar from './../searchBar'
import { Form, Button } from 'semantic-ui-react'
import SearchTripFrom from './../forms/SearchTripForm'
import {Grid} from 'semantic-ui-react'
import {searchTripRequest} from './../../actions/trip'
import TripGrid from './../grid/Trip'

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
getTrips = ()=> {
  //Todo make reqest to api search trip
  if(this.state.data) {
    this.props.searchTrip(this.state.data)
  }
//  this.props.searchTrip()
}

  render() {
    //TODO add foreach for html
    console.log(this.props.searchedTrip, 'searched trips---->')
    return (
      <div>
      <Grid columns={12} textAlign='center' verticalAlign='middle'>
        <Grid.Row>
          <h1>SearchTripPage</h1>
        </Grid.Row>
          <Grid.Row>
            <SearchTripFrom
              onSubmit={this.getTrips}
              setCoodinatesFrom={this.setCoodinatesFrom}
              setCoodinatesTo={this.setCoodinatesTo}
              getCoordinates={this.getCoordinates}
            />
          </Grid.Row>
          <Grid.Row>

            <TripGrid
              data={this.props.searchedTrip}  
              match={this.props.match.path}/>

          </Grid.Row>
      </Grid>
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
  }),
  onSearch: PropTypes.func
}
const mapStateToProps = (state) => {
  return {
    searchedTrip: state.trip && state.trip.trip
  }
}


export default connect(mapStateToProps, { searchTrip: searchTripRequest })(SearchTripPage)
