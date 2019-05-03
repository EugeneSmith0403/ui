import React, {Component} from 'react'
import { Message } from 'semantic-ui-react'


const PositiveMessage = ({text}) => {
  return (
      <Message positive>
        <Message.Header>{text}</Message.Header>
      </Message>
  )
}
export default PositiveMessage
