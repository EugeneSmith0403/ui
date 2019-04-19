import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({isAuthenticated, component:Component, ...routeProps}) => {
  return (
    <Route {...routeProps} render={props=> !isAuthenticated ? <Redirect to="/" />: <Component {...props} />}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: !!state.user.token
  }
}

UserRoute.propsTypes = {
  isAuthenticated: PropTypes.bool.isRequred,
  component: PropTypes.element.isRequired
}

export default connect(mapStateToProps, null)(UserRoute)
