import React, {Component} from 'react'
import { Button, Form, Message, Grid, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import validator from 'validator'
import {connect} from 'react-redux'
import Previews from './../dragAndDrop'

class ProfileForm extends Component {

  componentWillMount() {
  //  this.init(this.props.data)
  }

  state = {
    data: {
      username: '',
      email: '',
      age: 0,
      image: '',
      phone: ''
    },
    errors: {}
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSubmit = () => {
    //send data this.state.data
  }

  init = (data) => {
    this.setState({
      data
    })
  }

  render() {
    const errors = ''
    const isErrors = false
    const {username, email, age, image, phone} = this.state.data
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
                placeholder='joe@schmoe.com' />
                { errors.password && <Message
                  error
                  header={errors.username}
                /> }
                <Form.Input
                  label='age'
                  name='age'
                  value={age}
                  type="number"
                  onChange={this.onChange}
                  placeholder='23' />
                  { errors.password && <Message
                    error
                    header={errors.password}
                  /> }
                <Form.Input
                  label='Phone'
                  name='phone'
                  type="text"
                  value={phone}
                  onChange={this.onChange}
                  placeholder='phone' />
             <Button>Update</Button>
           </Grid.Column>
           <Grid.Column>
               <Label>
                Image
              </Label>
              <Previews />
           </Grid.Column>
         </Grid.Row>
       </Grid>
     </Form>

      </div>
    )
  }
}

export default connect()(ProfileForm)
