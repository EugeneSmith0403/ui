import { RECIEVED_USER_TRIP } from './../types'

export default function ownerTrip (state = {loaded: false, errors: {}}, action = {}) {
  switch(action.type) {
    case RECIEVED_USER_TRIP:
      return {
        trip: action.data,
        loaded: true
      }
    default:
      return {
        ...state
      }
  }
}
