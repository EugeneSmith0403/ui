import React, {Component} from 'react'
import { Label } from 'semantic-ui-react'


const  InputView = ({props}) => {
  return (
    props.selected ? <div>
      <Label>{props.placeholder}</Label>
      <p>{props.value}</p>
    </div>: ''
  )
}
export default InputView
