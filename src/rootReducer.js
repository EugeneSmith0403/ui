import { combineReducers } from 'redux'
import user from './reducers/user'
import errors from './reducers/errors'
import trip from './reducers/trip'
import { connectRouter } from 'connected-react-router'
import history from './history'
export default combineReducers({
  user,
  trip,
  router: connectRouter(history),
  errors
})
