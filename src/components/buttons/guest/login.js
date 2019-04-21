import React, {Component} from 'react'
import {Button, Grid} from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Login = () =>
  <Grid.Column>
    <Link to="/login">
      <Button content='Login' primary />
    </Link>
  </Grid.Column>

  export default Login
