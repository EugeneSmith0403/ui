import {
  FETCH_USER,
  USER_SIGN_UP,
  USER_LOGIN ,
  USER_ERROR,
  CONFIRM_ENTRANCE_SIGNUP,
  LOGOUT,
  USER_PROFILE_UPDATED
} from './../types'

export default function user (state = { loaded: false, errors: {} }, action = {}) {
    switch(action.type) {
      case USER_SIGN_UP:
        return {
          ...action.user,
          loaded: true
        }
      case USER_LOGIN:
      return {
        ...action.user,
        loaded: true
      }
      case CONFIRM_ENTRANCE_SIGNUP:
      return {
        ...state,
        ...action.user,
        loaded: true
      }
      case FETCH_USER:
        return {
          ...state,
          ...action.user,
          loaded: true
        }
      case USER_PROFILE_UPDATED:
        return {
          ...state,
          ...action.data,
          loaded: true
        }
    /*  case USER_ERROR:
      return {
        ...state,
        errors: action.error,
        loaded: false
      } */
      case LOGOUT:
        return {
          loaded: true
        }
      default:
        return {
          ...state
        }
    }
}
