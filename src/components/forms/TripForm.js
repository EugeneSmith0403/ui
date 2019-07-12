import React, {Component} from 'react'
import { Button, Form, Message, Grid, Label, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import validator from 'validator'
import Previews from './../dragAndDrop'
import {connect} from 'react-redux'
import _ from 'lodash'
import PositiveMessage  from './../messages/PositiveMessage'
import SearchBar from './../searchBar'
import {EnabledPicker, EnabledInput} from './Enabled'


class TripForm extends Component {

  _initData: null
  componentWillMount() {
    const trip = this.props.isNew ? {}: this.props.trip
    const {from, to, dateStart, dateFinished, maxPeople, occupiedPlaces, cost, carModel, carYear} = trip
    const data = {
      from,
      to,
      dateStart: dateStart && new Date(dateStart) || null,
      dateFinished: dateFinished && new Date(dateFinished) || null,
      maxPeople,
      occupiedPlaces,
      cost,
      carModel,
      carYear
    }
    this.setState({
      data
    })
    this._initData = data
  }

  set initData(value) {
    this._initData = value
  }

  get initData() {
    return this._initData
  }
  isChanged = () => {
    return _.differenceWith([this.state.data, this._initData], [this._initData], _.isEqual).length
  }

  state = {
    data: {
      from: {},
      to: {},
      dateStart: null,
      dateFinished: null,
      maxPeople: 5,
      occupiedPlaces: 0,
      cost: 1,
      carModel: ''
    },
    updated: false,
    errors: {}
  }

  onChange = e => this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value,
    },
    updated: false
  })
  onChangeNumber = e =>this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: parseInt(e.target.value),
      updated: false
    }
  })
  onChangeFile = (file)=> {
    this.setState({updated: false})
    this.setState({
      data:{
        ...this.state.data,
        file:  file[0],
      },
      updated: false
    })
  }
  convertDataToForm(data) {
    let formData = new FormData()
    _.forEach(data, (value, prop)=>{
      if(value){
        formData.append(prop, value)
      }
    })
    return formData
  }

  onSubmit = () => {
    let data = this.convertDataToForm(this.state.data)
    if(this.isChanged()) {
      this._initData = this.state.data;

      this.props.create(this.state.data)
      this.setState({
        updated: false
      })
    }
  }
  onChangeStartDate =  (date) => {
      this.setState({
        data: {
          ...this.state.data,
          dateStart: new Date(date).getTime()
        }
      })
  }
  onChangeFinishedDate = (date) => {
    this.setState({
      data: {
        ...this.state.data,
        dateFinished: new Date(date).getTime()
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
  setCoodinatesTo = (value) => {
    this.setState({
      data: {
        ...this.state.data,
        to: value
      }
    })
  }
/*TODO dateFinished dataStart remake to timepicker not datepocker*/
  render() {
    const errors = ''
    const isErrors = false
    const { updated } = this.state
    const {
      from,
      to,
      dateStart,
      dateFinished,
      maxPeople,
      occupiedPlaces,
      cost, carModel, carYear} = this.state.data
    return(
      <div>
      <Form onSubmit={this.onSubmit} error={isErrors} >
      { errors.email && <Message
        error
        header={errors.email}
      /> }
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
            <EnabledPicker isEnabled={this.props.isEnabled}>
                  <DatePicker
                    placeholderText='Date From'
                    name='startDate'
                    selected={dateStart}
                    onChange={this.onChangeStartDate}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minTime={setHours(setMinutes(new Date(), 0), 17)}
                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                  />
            </EnabledPicker >

           </Grid.Column>
         </Grid.Row>
         <Grid.Row>
           <Grid.Column>
           <EnabledPicker isEnabled={this.props.isEnabled}>
             <DatePicker
               placeholderText='Date To'
               name='startDate'
               selected={dateFinished}
               showTimeSelect
               dateFormat="MMMM d, yyyy h:mm aa"
               minTime={setHours(setMinutes(new Date(), 0), 17)}
               maxTime={setHours(setMinutes(new Date(), 30), 20)}
               onChange={this.onChangeFinishedDate}
             />
             </EnabledPicker >
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <SearchBar
                lat={from && from.lat}
                lng={from && from.lng}
                placeholder="From"
                setCoordinates={this.setCoodinatesFrom} />
             </Grid.Column>
           </Grid.Row>

           <Grid.Row>
             <Grid.Column>
               <SearchBar
                  lat={to && to.lat}
                  lng={to && to.lng}
                  placeholder="To"
                  setCoordinates={this.setCoodinatesTo} />
              </Grid.Column>
            </Grid.Row>

          <Grid.Row>
            <Grid.Column>
            <EnabledInput isEnabled={this.props.isEnabled}>
              <Form.Input
                name='maxPeople'
                type="text"
                value={maxPeople}
                onChange={this.onChange}
                placeholder='maxPeople' />
              </EnabledInput>
             </Grid.Column>
           </Grid.Row>
           <Grid.Row>
             <Grid.Column>
             <EnabledInput isEnabled={this.props.isEnabled}>
               <Form.Input
                 name='occupiedPlaces'
                 type="text"
                 value={occupiedPlaces}
                 onChange={this.onChange}
                 placeholder='occupiedPlaces' />
            </EnabledInput>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
              <EnabledInput isEnabled={this.props.isEnabled}>

              <Form.Input
                name='cost'
                type="text"
                value={cost}
                onChange={this.onChange}
                placeholder='cost' />
              </EnabledInput>
               </Grid.Column>
             </Grid.Row>
             <Grid.Row>
               <Grid.Column>
               <EnabledInput isEnabled={this.props.isEnabled}>

                 <Form.Input
                   name='carModel'
                   type="text"
                   value={carModel}
                   onChange={this.onChange}
                   placeholder='carModel' />
                </EnabledInput>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                <EnabledInput isEnabled={this.props.isEnabled}>

                <Form.Input
                  name='carYear'
                  type="text"
                  value={carYear}
                  onChange={this.onChangeNumber}
                  placeholder='carYear' />
                </EnabledInput>
                 </Grid.Column>
               </Grid.Row>
        <Grid.Row>
          <Grid.Column>

            {this.props.isEnabled && <Button>Update</Button> }
          </Grid.Column>
        </Grid.Row>
      </Grid>
     </Form>
     <Grid>
       <Grid.Row>
         {updated && !errors ? <PositiveMessage text="Profile data updated successed"/> : ''}
       </Grid.Row>
     </Grid>
      </div>

    )
  }
}

TripForm.propTypes = {
  from: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number
  }),
  to: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number
  }),
  dateStart: PropTypes.number,
  dateFinished: PropTypes.number,
  maxPlaces: PropTypes.number,
  occupiedPlaces: PropTypes.number,
  cost: PropTypes.number,
  carModel: PropTypes.string,
  carYear: PropTypes.number
}


export default TripForm
