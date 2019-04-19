import React, {Component} from 'react'
import {Button, Grid} from 'semantic-ui-react'
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <Grid columns={12} textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Row>
            <h1>Welcome to our serves</h1>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link to="/signup">
              <Button content='Signup' primary />
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/login">
              <Button content='Login' primary />
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
export default HomePage
