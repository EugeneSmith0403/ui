import React, {Component} from 'react'
import ProfileForm from './../forms/ProfileForm'
import {connect} from 'react-redux'
import {updateProfileRequest} from './../../actions/user'
import PropTypes from 'prop-types'
import SearchBar from './../searchBar'
import { Form, Button } from 'semantic-ui-react'

class SearchTripFrom extends Component {
  state = {
    errors: {},
    from: {
      lat: '',
      lng: ''
    },
    to: {
      lat: '',
      lng: ''
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.defaultCoordinates.from.lat != this.state.from.lat) {
      this.setState({
        from: this.props.defaultCoordinates.from,
        to: this.props.defaultCoordinates.to
      })
    }
  }
  onSubmit = () => {
    const {from, to} = this.props.getCoordinates()
    if(from.lat && to.lat) {
      this.setState({
        errors: {}
      })
      this.props.onSubmit()
    }else {
      this.setState({
        errors: {
        from: !from.lat && 'error',
        to: !to.lat && 'error',
      }})
    }

  }
  render() {
    const {to, from} = this.state.errors
    return (
        <Form onSubmit={this.onSubmit}>
          {!!from && from}
          <SearchBar
            lat={this.state.from.lat}
            lng={this.state.from.lng}
            placeholder="From"
            setCoordinates={this.props.setCoodinatesFrom} />
          {!!to && to}
          <SearchBar
            lat={this.state.to.lat}
            lng={this.state.to.lng}
            placeholder="To"
            setCoordinates={this.props.setCoodinatesTo} />
          <div className="container ui">
            <div className='ui centered middle aligned grid'>
              <Button type='submit'>Search</Button>
            </div>
          </div>
        </Form>
    )
  }
}

SearchTripFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setCoodinatesFrom: PropTypes.func.isRequired,
  setCoodinatesTo: PropTypes.func.isRequired,
  getCoordinates: PropTypes.func.isRequired

}




export default SearchTripFrom
