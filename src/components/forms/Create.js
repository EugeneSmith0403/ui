import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash'


const CreateForm = ({Component}) => {

  return class Create extends Component {
    _initData: null
    state = {
      data: {},
      updated: false,
      errors: {}
    }
    set initData(value) {
      this._initData = value
    }

    get initData() {
      return this._initData
    }
    isChanged = () => {
      return _.differenceWith([this.state.data, this._initData], [this._initData], _.isEqual).length
    }

    onChange = e => this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
      updated: false
    })
    onChangeNumber = e =>this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value),
        updated: false
      }
    })
    onChangeFile = (file)=> {
      this.setState({updated: false})
      this.setState({
        data:{
          ...this.state.data,
          file:  file[0],
        },
        updated: false
      })
    }
    convertDataToForm(data) {
      let formData = new FormData()
      _.forEach(data, (value, prop)=>{
        if(value){
          formData.append(prop, value)
        }
      })
      return formData
    }
    render() {
      return (
        <Component {...this.props} />
      )
    }

  }

}
export CreateForm
