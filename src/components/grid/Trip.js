import React, {Component} from 'react'
import { Button, Card, Image, Grid, Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Router, Route, Link } from "react-router-dom";
import Moment from 'react-moment';
const imageHost = 'http://localhost:8080/'


const Item = ({data, url}) => {
  const ownerPhoto  = imageHost + data.owner.image;
  return (
    <Card fluid>
    <Link to={url}>
      <Card fluid>
        <Card.Content>
         <Card.Header>
           <Grid>
             <Grid.Row>
               <Grid.Column width={8}>
                <Moment
                  format="ddd/DD">
                      {data.dataStart}
                </Moment>

               </Grid.Column>
               <Grid.Column width={8} textAlign="right" >
                  {data.cost}
               </Grid.Column>
             </Grid.Row>
           </Grid>
         </Card.Header>
             <Card.Description>
             <Grid width={12}>
               <Grid.Row>
               <Grid.Column >
                  <p><strong>
                  <Moment
                    format="H/00">
                        {data.dateStart}
                  </Moment>
                  </strong>
                    {data.from.lat}</p>
               </Grid.Column>
               </Grid.Row>
               <Grid.Row>
               <Grid.Column >
               <p><strong>
               <Moment
                 format="H/00">
                     {data.dateFinished}
               </Moment>
               </strong>
                 {data.to.lat}</p>
               </Grid.Column >
               </Grid.Row>
               <Grid.Row>
                <Grid.Column width={8}>
                  <Image circular floated='left' width='50px' height='50px' size='mini' src={ownerPhoto} />
                  <span>{data.owner.username}</span>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                  {data.carModel}
                </Grid.Column>
               </Grid.Row>
               <Grid.Row>
                <Grid.Column >
                  Занято: {data.occupiedPlaces} из {data.maxPlaces}
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

const TripGrid = ({match, data}) => {
  console.log(data)
  const list = data ? data: []
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


TripGrid.propTypes = {
  searchTripRequest: PropTypes.func.isRequired,
  onSearch: PropTypes.func
}


export default TripGrid
