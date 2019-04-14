import {USER_SIGN_UP, USER_LOGIN ,USER_ERROR} from './../types'

export default function user (state = { errors: {} }, action = {}) {
    switch(action.type) {
      case USER_SIGN_UP:
        return {
          ...action.user
        }
      case USER_LOGIN:
      return {
        ...action.user
      }
      case USER_ERROR:
      return {
        ...state,
        errors: action.error
      }
      default:
        return state
    }
}
