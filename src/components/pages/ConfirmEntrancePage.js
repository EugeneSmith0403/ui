import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom";
import { confirmEntranceSignupRequestAction } from './../../actions/auth'
import PositiveMessage  from './../messages/PositiveMessage'
import NegativeMessage from './../messages/NegativeMessage'

class ConfirmEntrancePage extends Component  {
  componentWillMount() {
    this.props.confirmEntrance(this.props.match.params.hash)
  }
  render() {
    return(
      <div>
      {this.props.loading && 'Loading...'}
      {this.props.isAccessed && !this.props.loading && <PositiveMessage /> }
      {!this.props.isAccessed && !this.props.loading && <NegativeMessage /> }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAccessed: !!state.user.token,
    accessToken: state.user.token,
    loading: state.user.loading
  }
}

ConfirmEntrancePage.propTypes = {
  isAccessed: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, {confirmEntrance: confirmEntranceSignupRequestAction })(ConfirmEntrancePage)
