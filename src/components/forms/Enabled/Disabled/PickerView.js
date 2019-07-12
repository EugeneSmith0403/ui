import React, {Component} from 'react'
import { Label } from 'semantic-ui-react'


const PickerView = ({props}) => {
  return (
    props.selected ? <div>
      <Label>{props.placeholderText}</Label>
      <p>{props.selected && Date(props.selected)}</p>
    </div>: ''
  )
}
export default PickerView
