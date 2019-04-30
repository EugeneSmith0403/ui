import React, {Component} from 'react'
import ProfileForm from './../forms/ProfileForm'
import {connect} from 'react-redux'
import {updateProfileRequest} from './../../actions/user'
import PropTypes from 'prop-types'

const ProfilePage = ({update}) => {
  return (
    <div>
      <h1>Profile</h1>
      <ProfileForm update={update} />
    </div>
  )
}

ProfilePage.propTypes = {
  update: PropTypes.func.isRequired,
}


export default connect(null, {update: updateProfileRequest })(ProfilePage)
