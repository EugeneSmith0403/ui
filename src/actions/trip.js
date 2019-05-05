import {
  SEARCHED_TRIP_REQUEST,
  SEARCHED_TRIP
} from './../types'

export const searchTripRequest = (data) => ({
  type: SEARCHED_TRIP_REQUEST,
  data
})
export const searchTrip = (data) => ({
  type: SEARCHED_TRIP,
  data
})
