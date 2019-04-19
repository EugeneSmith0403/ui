import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom";

const PendingConfirmRoute = ({isPending, component:Component, ...routeProps}) => {
    console.log(isPending)
  return (
    <Route {...routeProps} render={props=> !isPending ? <Redirect to="/" />: <Component {...props} />}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isPending: !!state.user.publicKey || !!localStorage.getItem('publicKey')
  }
}

PendingConfirmRoute.propsTypes = {
  isPending: PropTypes.bool.isRequred,
  component: PropTypes.element.isRequired
}

export default connect(mapStateToProps, null)(PendingConfirmRoute)
