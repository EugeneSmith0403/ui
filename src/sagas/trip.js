import sendDataWithTokenSaga, { helperSagaRequest } from './utils/sagaCheckToken'
import { searchTripAction, createTripAction } from './../actions/trip'
import {tripError} from './../actions/errors'
import {call, put} from 'redux-saga/effects'
import api from './../api'


export function* searchTrip(action) {
  try{
    const credentials = {
      to: action.data.to,
      from: action.data.from
    }
    const request = yield api.trip.searchTrips(credentials);

    yield put(searchTripAction(request))

  }catch(e) {
    yield put(tripError(e.response))
  }
}

export function* createTrip(action) {
  try{
    const params = {
      ...action.data
    }
    console.log(params)
    yield sendDataWithTokenSaga(
      helperSagaRequest(api.trip.createTrip, params), createTripAction
    )

  }catch(e) {
    yield put(tripError(e.response))
  }
}
