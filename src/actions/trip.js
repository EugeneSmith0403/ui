import {
  SEARCHED_TRIP_REQUEST,
  SEARCHED_TRIP,
  SEARCHED_ONE_TRIP_REQUEST,
  CREATED_TRIP_REQUEST,
  SEARCHED_ONE_TRIP,
  CREATED_TRIP,
  RESET_TRIP,
  RECIEVED_USER_TRIP,
  RECIEVED_USER_TRIP_REQUEST
} from './../types'



export const revieveUserTrips = (email) => ({
  type: RECIEVED_USER_TRIP,
  email
})

export const revieveUserTripsRequest = (data) => ({
  type: RECIEVED_USER_TRIP_REQUEST,
  data
})

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

export const resetTripAction = () => ({
  type: RESET_TRIP
})
