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
import GridView from './../grid/GridView'
import queryString from 'query-string'

class SearchTripPage extends Component {
componentDidMount() {
  const {search} = this.props.router.location
  if(search) {
    const { from, to } = queryString.parse(search);
    this.setState({
      data: {
        to: this.splitLngLat(to),
        from: this.splitLngLat(from)
      }
    })

  }
}
splitLngLat = (data) => {
  const arData = data.split(',')
  return {
    lat: arData && arData[0],
    lng: arData && arData[1]
  }
}
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
getFullSearchedUrl = () => {
  const path = this.props.match.path;
  const fromLat = this.state.data.from.lat
  const fromLong = this.state.data.from.lng
  const toLat = this.state.data.to.lat
  const toLong = this.state.data.to.lng

  return  path + `?from=${fromLat},${fromLong}&to=${toLat},${toLong}`
}
getTrips = ()=> {
  //Todo make reqest to api search trip
  if(this.state.data) {
    this.props.searchTrip(this.state.data)
    this.props.history.push(this.getFullSearchedUrl())
  }
}

  render() {
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
              defaultCoordinates={this.state.data}
            />
          </Grid.Row>
          <Grid.Row>

            <GridView
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
    searchedTrip: state.trip && state.trip.trip,
    router: state.router
  }
}


export default connect(mapStateToProps, { searchTrip: searchTripRequest })(SearchTripPage)
