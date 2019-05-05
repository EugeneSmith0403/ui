import React, {Component} from 'react'
import ProfileForm from './../forms/ProfileForm'
import {connect} from 'react-redux'
import {updateProfileRequest} from './../../actions/user'
import PropTypes from 'prop-types'
import SearchBar from './../searchBar'
import { Form, Button } from 'semantic-ui-react'

class SearchTripFrom extends Component {
  state = {
    errors: {}
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
      <div className='search-area'>
        <Form onSubmit={this.onSubmit}>
          {!!from && from}
          <SearchBar setCoordinates={this.props.setCoodinatesFrom} />
          {!!to && to}
          <SearchBar setCoordinates={this.props.setCoodinatesTo} />
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
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
