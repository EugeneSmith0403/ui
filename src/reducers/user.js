import {
  FETCH_USER,
  USER_SIGN_UP,
  USER_LOGIN ,
  USER_ERROR,
  CONFIRM_ENTRANCE_SIGNUP
} from './../types'

export default function user (state = { loading: true, errors: {} }, action = {}) {
    switch(action.type) {
      case USER_SIGN_UP:
        return {
          ...action.user,
          loading: false
        }
      case USER_LOGIN:
      return {
        ...action.user,
        loading: false
      }
      case CONFIRM_ENTRANCE_SIGNUP:
      return {
        ...state,
        ...action.user,
        loading: false
      }
      case FETCH_USER:
        return {
          ...state,
          ...action.user
        }
      case USER_ERROR:
      return {
        ...state,
        errors: action.error,
        loading: false
      }
      default:
        return state
    }
}
