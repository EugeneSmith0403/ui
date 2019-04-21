import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Base from './Base'

const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: !state.user.email
  }
}

export default Base(mapStateToProps);
