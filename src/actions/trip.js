import {
  SEARCHED_TRIP_REQUEST,
  SEARCHED_TRIP,
  SEARCHED_ONE_TRIP_REQUEST,
  CREATED_TRIP_REQUEST,
  SEARCHED_ONE_TRIP,
  CREATED_TRIP
} from './../types'

export const searchTripRequest = (data) => ({
  type: SEARCHED_TRIP_REQUEST,
  data
})
export const searchTripAction = (data) => ({
  type: SEARCHED_TRIP,
  data
})

export const oneTripRequest = (id) => ({
  type: SEARCHED_ONE_TRIP_REQUEST,
  id
})
export const oneTripAction = (id) => ({
  type: SEARCHED_ONE_TRIP,
  id
})

export const createTripRequest = (data) => ({
  type: CREATED_TRIP_REQUEST,
  data
})
export const createTripAction = (data) => ({
  type: CREATED_TRIP,
  data
})
