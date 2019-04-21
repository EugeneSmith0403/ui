import React, {Component} from 'react'
import {Button, Grid} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Login from './../buttons/guest/login'
import Singup from './../buttons/guest/singup'
import GuestPermission from './../renderingPermission/GuestPermision'
import AuthPermission from './../renderingPermission/AuthPermision'
import DashboardInfo from './../dashboardInfo/HomeInfo'

const HomePage = () => {
  return (
    <div>
      <Grid columns={12} textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Row>
            <h1>Welcome to our serves</h1>
        </Grid.Row>
        <Grid.Row>
          <GuestPermission component={Singup} />
          <GuestPermission component={Login} />
          <AuthPermission component={DashboardInfo} />
        </Grid.Row>
      </Grid>
    </div>
  )
}
export default HomePage
