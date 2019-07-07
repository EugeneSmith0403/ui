import React, {Component} from 'react'
import { Button, Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import ItemTrip from './ItemTrip'


const GridView = ({match, data}) => {
  const list = data ? data: []
  return (
    <Card.Group>
    {list.map((item, index)=>{
      return(
        <ItemTrip
          key={index}
          data={item}
          url={`${match}/${item._id}`}/>
      )
    })}
    </Card.Group>
  )
}

export default GridView
