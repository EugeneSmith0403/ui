import React, {Component} from 'react'
import { Message } from 'semantic-ui-react'

const NegativeMessage = () => {
  return (
      <Message negative>
        <Message.Header>We're sorry. Your token is invalid. Go to signup page.</Message.Header>
      </Message>
  )
}
export default NegativeMessage
