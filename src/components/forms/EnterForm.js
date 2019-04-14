import React, {Component} from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import validator from 'validator'


/*
Sagas

*/
class EnterForm extends Component  {
  state = {
    data: {
      email: '',
      password: ''
    },
    errors: {}
  }
  onSubmit = (e) => {
    let errors = this.validate();
    this.setState({errors})
    if(!Object.values(errors).length) {
      this.props.submit(this.state.data)
    }
  }
  validate = () => {
    let {email, password} = this.state.data;
    const errors = {}
    if(!validator.isEmail(email)) {
      errors['email'] = 'Invalid Email'
    }
    if(!password) {
      errors['password'] = 'Invalid password'
    }
    return errors;
  }
  onChange = e => this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value
    }
  })

  render() {
      const {email, password} = this.state.data
      const {errors} = this.state
      const isErrors = !!Object.values(errors).length
    return (
      <Form onSubmit={this.onSubmit} error={isErrors} >
      { errors.email && <Message
        error
        header={errors.email}
      /> }
      <Form.Input
        label='Email'
        name='email'
        value={email}
          type="text"
        onChange={this.onChange}
        placeholder='joe@schmoe.com' />
        { errors.password && <Message
          error
          header={errors.password}
        /> }
        <Form.Input
          label='Password'
          name='password'
          type="password"
          value={password}
          onChange={this.onChange}
          placeholder='password' />

     <Button>Submit</Button>
     </Form>
    )
  }
}

EnterForm.propTypes = {
  submit: PropTypes.func.isRequired
}


export default EnterForm
