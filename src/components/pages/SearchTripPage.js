import React, {Component} from 'react'
import ProfileForm from './../forms/ProfileForm'
import {connect} from 'react-redux'
import {updateProfileRequest} from './../../actions/user'
import PropTypes from 'prop-types'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import PlacesAutocomplete from 'react-places-autocomplete'


//https://www.youtube.com/watch?v=Rpzp0yCAmq4 - how to create google autocomplite

//google api key AIzaSyAp0FaDRS0LO6TrIld-b1tfxfu5MpFBAiM

class SearchTripPage extends Component {
  state = {
    data: {
      trips: [{
        id: 1,
        title:'one',
        From: '',
        To: ''
      },
      {
        id: 2,
        title:'two',
        From: '',
        To: ''
      },
      {
        id: 3,
        title:'two',
        From: '',
        To: ''
      }]
    },
    searchString: '',
    loading: false
  }
  onSearchChange = (e, { value }) => {
    /*this.setState({
      loading: true
    }) */


  }
  render() {
    const isLoading = false;
    const {state} = this
    const {searchString} = state
    const {trips} = state.data

    return (
      <div>
        <Search
           category
           loading={isLoading}
           onResultSelect={()=>{}}
           onSearchChange={()=>{}}
           results={trips}
           value={searchString}
           {...this.props}
         />
        <h1>Search trips page</h1>
      </div>
    )
  }
}



export default SearchTripPage
