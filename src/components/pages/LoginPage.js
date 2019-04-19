import React, {Component} from 'react'

import {connect} from 'react-redux'
import EnterForm from './../../components/forms/EnterForm'
import PropTypes from 'prop-types'
import {loginRequestAction} from './../../actions/auth'

const LoginPage = ({login}) => {
  return (
    <div>
      <h1>Login</h1>
      <EnterForm submit={login}/>
    </div>
  )
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired
}


export default connect(null, { login: loginRequestAction })(LoginPage);
