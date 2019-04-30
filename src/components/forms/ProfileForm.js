import React, {Component} from 'react'
import { Button, Form, Message, Grid, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import validator from 'validator'
import Previews from './../dragAndDrop'
import {connect} from 'react-redux'

class ProfileForm extends Component {

  componentWillMount() {
    const {username, email, age, image, phone} = this.props.user
    this.setState({
      data: {
        username,
        email,
        age,
        image,
        phone
      }
    })
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

  onChange = e => this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value
    }
  })
  onChangeNumber = e =>this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: parseInt(e.target.value)
    }
  })
  onChangeFile = (file)=> {
    let data = new FormData();
    data.append('image', file[0], file[0].name)
      console.log(data)
    this.setState({
      data:{
        ...this.state.data,
        file: data
      }
    })
  }

  onSubmit = () => {
    this.props.update(this.state.data)
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
                placeholder='joe' />
                { errors.username && <Message
                  error
                  header={errors.username}
                /> }
                <Form.Input
                  label='Email'
                  name='email'
                  value={email}
                  type="text"
                  onChange={this.onChange}
                  placeholder='joe@schmoe.com' />
                  { errors.email && <Message
                    error
                    header={errors.email}
                  /> }
                <Form.Input
                  label='age'
                  name='age'
                  value={age}
                  type="number"
                  onChange={this.onChangeNumber}
                  placeholder='23' />
                  { errors.username && <Message
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
              {
                image ? <img src={image} alt='' with='50' height='50' /> : ''
              }
              <Previews onChangeFile={this.onChangeFile}/>
           </Grid.Column>
         </Grid.Row>
       </Grid>
     </Form>

      </div>
    )
  }
}

ProfileForm.propTypes = {
  update: PropTypes.func.isRequired,
  user:  PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
    phone: PropTypes.string
  }),
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ProfileForm)
