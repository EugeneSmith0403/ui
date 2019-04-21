import React, {Component} from 'react'
import MenuNav from './LogoutNav'
import AuthPermission from './../renderingPermission/AuthPermision'


const SideMenu = () => {
  return (
    <div className="ui">
      <AuthPermission component={MenuNav} />
      </div>
  )
}


export default SideMenu
