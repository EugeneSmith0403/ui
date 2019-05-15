import React, {Component} from 'react'
import { Button, Form, Message, Grid, Label, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import validator from 'validator'
import Previews from './../dragAndDrop'
import {connect} from 'react-redux'
import _ from 'lodash'
import PositiveMessage  from './../messages/PositiveMessage'

class TripForm extends Component {

  _initData: null
  componentWillMount() {
    const {username, email, age, image, phone} = this.props.user
    const data = {
      username,
      email,
      age,
      image,
      phone
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
      username: '',
      email: '',
      age: 0,
      image: '',
      phone: '',
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
      this.props.update(data)
      this.setState({
        updated: true
      })
    }
  }

  render() {
    const errors = ''
    const isErrors = false
    const { updated } = this.state
    const {username, email, age, phone} = this.state.data
    const {image} = this.props
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
              <Form.Input
                label='User Name'
                name='username'
                value={username}
                type="text"
                onChange={this.onChange}
                placeholder='joe' />
                { errors.username && <Message
                  error
                  header={errors.username}
                /> }
             <Button>Update</Button>
           </Grid.Column>
           <Grid.Column>
               <Label>
                Image
              </Label>
              {
                image ? <Image  src={imageHost + image} size='medium' />: ''
              }
              <Previews updated={updated} onChangeFile={this.onChangeFile}/>
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


const mapStateToProps = (state) => {
  return {
    trip: state.trip
  }
}

export default connect(mapStateToProps)(TripForm)
