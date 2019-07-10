import React, {Component} from 'react'
import { Label } from 'semantic-ui-react'


const PickerDisabledView = ({props}) => {
  return (
    props.selected ? <div>
      <Label>{props.placeholderText}</Label>
      <p>{props.selected}</p>
    </div>: ''
  )
}
export default PickerDisabledView
