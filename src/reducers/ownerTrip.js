import { RECIEVED_USER_TRIP, UPDATED_USER_TRIP, DELETED_USER_TRIP } from './../types'

export default function ownerTrip (state = {loaded: false, errors: {}}, action = {}) {
  switch(action.type) {
    case RECIEVED_USER_TRIP:
      return {
        trip: action.data,
        loaded: true
      }
    case UPDATED_USER_TRIP:
      const {data} = action
      const { trip } = state;

      //TODO remake purely!
      const currentItem = trip.filter((item, index)=> {
        return item._id === data._id
      })
      const anotherItems = trip.filter((item, index)=> {
        return item._id !== data._id
      })
      const newItem = {
        ...currentItem,
        ...data
      }
      const newArtrip = [
        ...anotherItems,
        ...[newItem]
      ]
      return {
        trip: newArtrip,
        loaded: true
      }
    case DELETED_USER_TRIP:
      const {id} = action
      const ownTrip = state.trip;
      const newTrips = ownTrip.filter((item)=>{
        return item._id !== id
      })
      return {
        trip: newTrips,
        loaded: true
      }
    default:
      return {
        ...state
      }
  }
}
