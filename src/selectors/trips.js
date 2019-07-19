import { createSelector } from 'reselect'

const getTrips = (state, props) => state.trip && state.ownerTrip.trip

export const makeGetTrips = () => createSelector(
  getTrips,
  (trip) => trip
)
