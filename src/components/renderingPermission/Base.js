import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const BasePermission = ({isAuth, component:Component })=> {
  return (
    <div>
    {
      isAuth && <Component />
    }
    </div>
  )
}

BasePermission.propTypes = {
  isAuth: PropTypes.bool.isRequired
}

const Base = (mapStateToProps) => {
  return connect(mapStateToProps, null)(BasePermission)
}

export default Base;
