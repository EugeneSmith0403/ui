import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logoutRequest} from './../../actions/auth'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const MenuNav = ({logout}) =>
  <Menu pointing vertical>
    <Link to="/">
      <Menu.Item name='home' active={false}/>
    </Link>
      <Menu.Item onClick={()=>logout()} name='logout' />
  </Menu>



export default connect(null, { logout: logoutRequest })(MenuNav)
