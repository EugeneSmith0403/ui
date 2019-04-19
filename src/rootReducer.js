import { combineReducers } from 'redux'
import user from './reducers/user'
import { connectRouter } from 'connected-react-router'
import history from './history'
export default combineReducers({
  user,
  router: connectRouter(history)
})
