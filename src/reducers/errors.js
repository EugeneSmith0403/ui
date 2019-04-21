import { USER_ERROR } from './../types'

export default function errors (state = { loading: true, errors: {} }, action = {}) {
  switch(action.type) {
    case USER_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false
      }
    default:
      return {}
  }
}
