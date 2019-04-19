import React, {Component} from 'react'
import { Message } from 'semantic-ui-react'


const PositiveMessage = () => {
  return (
      <Message positive>
        <Message.Header>Your entrance successed</Message.Header>
      </Message>
  )
}
export default PositiveMessage
