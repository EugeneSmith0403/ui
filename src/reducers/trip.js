import { CREATED_TRIP, SEARCHED_TRIP, SEARCHED_ONE_TRIP } from './../types'

export default function trip (state = {loaded: false, errors: {}}, action = {}) {
  switch(action.type) {
    case SEARCHED_TRIP:
      return {
        ...state,
        trip: action.data,
        loaded: true
      }
      case SEARCHED_ONE_TRIP:
        return {
          ...state,
          trip: action.data,
          loaded: true
        }
      case CREATED_TRIP:
        return {
          ...action.trip,
          loaded: true
        }
    default:
      return {
        ...state
      }
  }
}
