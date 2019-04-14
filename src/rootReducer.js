import { combineReducers } from 'redux'
import user from './reducers/user'
import {routerReducer} from 'react-router-dom'

export default combineReducers({
  user,
  routing: routerReducer
})
