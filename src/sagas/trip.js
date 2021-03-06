import sendDataWithTokenSaga, {
  helperSagaRequest
} from "./utils/sagaCheckToken";
import { push } from 'connected-react-router'
import {
  searchTripAction,
  createTripAction,
  oneTripAction,
  revieveUserTrips,
  updatedTripAction,
  deleteTripAction
} from "./../actions/trip";
import { tripError } from "./../actions/errors";
import { call, put } from "redux-saga/effects";
import api from "./../api";

export function* searchTrip(action) {
  try {
    const credentials = {
      to: action.data.to,
      from: action.data.from
    };
    const request = yield api.trip.searchTrips(credentials);

    yield put(searchTripAction(request));
  } catch (e) {
    yield put(tripError(e.response));
  }
}

export function* updateTrip(action) {
  try {
    const { id, data } = action;

    const request = yield api.trip.updateTrip(id, data);
    yield put(updatedTripAction(request));
  } catch (e) {
    yield put(tripError(e.response));
  }
}

export function* deleteTrip(action) {
  try {
    const { id } = action;
    const request = yield api.trip.deleteTrip(id);
    yield put(deleteTripAction(request.id));
    yield put(push('/own-trips'))
  } catch (e) {
    yield put(tripError(e.response));
  }
}


export function* getUserTrips(action) {
  try {
    const request = yield api.trip.getUserTrips(action.email);
    yield put(revieveUserTrips(request));
  } catch (e) {
    yield put(tripError(e.response));
  }
}

export function* oneTrip(action) {
  try {
    const id = action.id;
    const request = yield api.trip.getOneTrips(id);
    yield put(oneTripAction(request));
  } catch (e) {
    yield put(tripError(e.response));
  }
}

export function* createTrip(action) {
  try {
    const params = {
      ...action.data
    };
    yield sendDataWithTokenSaga(
      helperSagaRequest(api.trip.createTrip, params),
      createTripAction
    );
  } catch (e) {
    yield put(tripError(e.response));
  }
}
