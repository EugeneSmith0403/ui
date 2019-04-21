import React, {Component} from 'react'
import {Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'


const DashboardInfo = ({userName}) => {
  return (
    <h2 class="ui header">
      <Icon name="meh" size='big'/>
      <div class="content">
        <div class="sub header">  This this your account, {userName} </div>
      </div>
    </h2>
  )
}

const mapStateToProps = (state = {}, ownProps) => {
  return {
    userName: state.user.username || state.user.email
  }
}

export default connect(mapStateToProps, null)(DashboardInfo)
