import { takeLatest } from 'redux-saga/effects'
import {
  USER_SIGN_UP_REQUEST,
  CONFIRM_ENTRANCE_SIGNUP_REQUEST,
  USER_LOGIN_REQUEST,
  FETCH_USER_REQUEST,
  LOGOUT_REQUEST
} from './types'
import { signupSaga ,confirmEntranceSaga, loginSaga, fetchUserSaga, logoutSaga } from './sagas/user'

export default function* rootSagas(action) {
    yield takeLatest(USER_SIGN_UP_REQUEST, signupSaga)
    yield takeLatest(CONFIRM_ENTRANCE_SIGNUP_REQUEST, confirmEntranceSaga)
    yield takeLatest(USER_LOGIN_REQUEST, loginSaga)
    yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga)
    yield takeLatest(LOGOUT_REQUEST, logoutSaga)
}
