import React, {PureComponent} from 'react'
import ProfileForm from './../forms/ProfileForm'
import {connect} from 'react-redux'
import {updateProfileRequest} from './../../actions/user'
import PropTypes from 'prop-types'
import Geocode from "react-geocode";
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import axios from 'axios'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

const apiKey = 'AIzaSyCMdC6o0UQFxzNCamBwPLWsV1E-Ipo77iA'
Geocode.setApiKey(apiKey);

class SearchBar extends PureComponent {

  componentDidUpdate(prevProps) {
    const {lat, lng} = this.props
    if(lat && lng && !this.state.mount) {
      this.setState({
        mount: true
      })
      this.getPlaceByLatLng(lat, lng);
    }
  }
  state = {
    data: {
      trips: []
    },
    searchString: '',
    suggesstion: [],
    isLoading: false,
    mount: false
  }
  autocompleteService = new window.google.maps.places.AutocompleteService();
  sessionToken = new window.google.maps.places.AutocompleteSessionToken()

  getPlaceByLatLng = (lat, lng) => {
    Geocode.fromLatLng(lat, lng).then(
      response => {
        const address = response.results[0].formatted_address;
        this.setState({
          searchString: address
        })
        console.log(address);
      },
      error => {
        console.error(error);
      }
    );
  }


  getGeoCodeByAddress  = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
          this.props.setCoordinates(latLng)
      })
      .catch(error => console.error('Error', error));
  }

  onSearchChange = (e, { value }) => {
    if(!value.length) {
      this.props.setCoordinates({})
      this.setState({
        ...this.state,
        isLoading: false,
        searchString: '',
        suggesstion: []
      })
    }else {

      this.setState({
        isLoading: true,
        searchString: value
      })

      setTimeout(() => {
       this.autocompleteService.getPlacePredictions({
           input: value,
           sessionToken: this.sessionToken
         },
         (suggesstion)=> {

           this.setState({
             isLoading: false,
             searchString: value,
             suggesstion: suggesstion.map((suggest)=>{
                return {
                  id: suggest.id,
                  title: suggest.description
                }
              })
           })
         }
       )
     }, 0)
   }
  }
  onResultSelect = (e, { result }) => {
    this.setState({
      ...this.state.data,
      searchString: result.title
    })
    this.getGeoCodeByAddress(result.title)
  }
  render() {
    const {searchString, suggesstion, isLoading} = this.state
    const placeholder = this.props.placeholder ? this.props.placeholder: '';
    return (
        <div className='ui container'>
          <Grid fluid={true}  >
            <Grid.Row fluid={true}>
              <Grid.Column>
               <Search
                   fluid ={true}
                   loading={isLoading}
                   onResultSelect={this.onResultSelect}
                   onSearchChange={this.onSearchChange}
                   icon=""
                   placeholder
                   results={suggesstion}
                   value={searchString}
                   {...this.props}
                 />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

SearchBar.propTypes = {
  setCoordinates: PropTypes.func.isRequired
}

export default SearchBar
