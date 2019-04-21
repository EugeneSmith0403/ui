import React, {Component} from 'react'
import {Button, Grid} from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Singup = () =>
    <Grid.Column>
      <Link to="/signup">
        <Button content='Signup' primary />
      </Link>
    </Grid.Column>
    
export default Singup
