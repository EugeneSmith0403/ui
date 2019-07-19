import {
  SEARCHED_TRIP_REQUEST,
  SEARCHED_TRIP,
  SEARCHED_ONE_TRIP_REQUEST,
  CREATED_TRIP_REQUEST,
  SEARCHED_ONE_TRIP,
  CREATED_TRIP,
  RESET_TRIP,
  RECIEVED_USER_TRIP,
  RECIEVED_USER_TRIP_REQUEST,
  UPDATED_USER_TRIP,
  UPDATED_USER_TRIP_REQUEST,
  DELETED_USER_TRIP_REQUEST,
  DELETED_USER_TRIP
} from './../types'



export const revieveUserTrips = (data) => ({
  type: RECIEVED_USER_TRIP,
  data
})

export const revieveUserTripsRequest = (email) => ({
  type: RECIEVED_USER_TRIP_REQUEST,
  email
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

export const updateTripRequest = (data, id) => ({
  type: UPDATED_USER_TRIP_REQUEST,
  id,
  data
})

export const updatedTripAction = (data) => ({
  type: UPDATED_USER_TRIP,
  data
})

export const deleteTripRequest = (id) => ({
  type: DELETED_USER_TRIP_REQUEST,
  id
})

export const deleteTripAction = (id) => ({
  type: DELETED_USER_TRIP,
  id
})


export const resetTripAction = () => ({
  type: RESET_TRIP
})
