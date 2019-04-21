import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutRequest} from './../../actions/auth'

const SideMenu = ({isAuth, logout}) => {
  return (
    <div className="ui">
    <Menu pointing vertical>
      <Link to="/">
        <Menu.Item name='home' active={false}/>
      </Link>
      {isAuth &&
        <Menu.Item
          onClick={()=>logout()}
          name='logout'
          />
      }
      </Menu>
      </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuth: !!state.user.email
  }

}

export default connect(mapStateToProps, { logout: logoutRequest })(SideMenu)
