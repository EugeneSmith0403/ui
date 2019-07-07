import { takeLatest } from 'redux-saga/effects'
import {
  USER_SIGN_UP_REQUEST,
  CONFIRM_ENTRANCE_SIGNUP_REQUEST,
  USER_LOGIN_REQUEST,
  FETCH_USER_REQUEST,
  LOGOUT_REQUEST,
  USER_PROFILE_UPDATED_REQUEST,
  SEARCHED_TRIP_REQUEST,
  SEARCHED_ONE_TRIP_REQUEST,
  CREATED_TRIP_REQUEST
} from './types'
import {
  signupSaga,
  confirmEntranceSaga,
  loginSaga,
  fetchUserSaga,
  logoutSaga,
  updateUserProfileSaga
} from './sagas/user'
import {searchTrip,  createTrip, oneTrip} from './sagas/trip'

export default function* rootSagas(action) {
    yield takeLatest(USER_SIGN_UP_REQUEST, signupSaga)
    yield takeLatest(CONFIRM_ENTRANCE_SIGNUP_REQUEST, confirmEntranceSaga)
    yield takeLatest(USER_LOGIN_REQUEST, loginSaga)
    yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga)
    yield takeLatest(LOGOUT_REQUEST, logoutSaga)
    yield takeLatest(USER_PROFILE_UPDATED_REQUEST, updateUserProfileSaga)

    yield takeLatest(SEARCHED_TRIP_REQUEST, searchTrip)
    yield takeLatest(CREATED_TRIP_REQUEST, createTrip)
    yield takeLatest(SEARCHED_ONE_TRIP_REQUEST, oneTrip)
}
