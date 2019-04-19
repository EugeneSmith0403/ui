import React, { Component } from 'react'
import EnterForm from './../forms/EnterForm'
import { connect } from 'react-redux'
import {signupRequestAction} from './../../actions/auth'

const SignupPage = ({signup}) => {
  return (
    <div>
    <h1>SignupPage</h1>
      <EnterForm submit={signup}/>
    </div>
  )
}


export default connect(null, {signup: signupRequestAction} )(SignupPage)
