import React, {Component} from 'react'
import { Button, Card, Image, Grid, Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Router, Route, Link } from "react-router-dom";


const Item = ({data, url}) => {
  return (
    <Card fluid>
    <Link to={url}>
      <Card fluid>
        <Card.Content>
         <Card.Header>
           <Grid>
             <Grid.Row>
               <Grid.Column width={8}>
                Вс, 19 мая
               </Grid.Column>
               <Grid.Column width={8} textAlign="right" >
                5000 р
               </Grid.Column>
             </Grid.Row>
           </Grid>
         </Card.Header>
             <Card.Description>
             <Grid width={12}>
               <Grid.Row>
               <Grid.Column >
                  <p><strong>12:00</strong>Новоибирск</p>
               </Grid.Column>
               </Grid.Row>
               <Grid.Row>
               <Grid.Column >
                  <p><strong>17:00</strong>  Москва</p>
               </Grid.Column >
               </Grid.Row>
               <Grid.Row>
                <Grid.Column width={8}>
                  <Image circular floated='left' size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                  <span>Елисей</span>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                  Volkswagen Golf
                </Grid.Column>
               </Grid.Row>
               <Grid.Row>
                <Grid.Column >
                  Свободно: 5 из 5
                </Grid.Column>
               </Grid.Row>
             </Grid>

             </Card.Description>
         </Card.Content>
      </Card>
    </Link>
    </Card>
  )
}
const test = () => 'test';


const Trip = ({match}) => {
  const list = [{1:1},{2:2},{3:3}]
  //TODO function map
  return (
    <Card.Group>
    {list.map((item, index)=>{
      return(
        <Item
          key={index}
          data={item}
          url={`${match}/${index + 1}`}/>
      )
    })}
    </Card.Group>
  )
}


Trip.propTypes = {
  searchTripRequest: PropTypes.func.isRequired,
  onSearch: PropTypes.func
}


export default Trip
