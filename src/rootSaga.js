import { takeLatest } from 'redux-saga/effects'
import {USER_SIGN_UP_REQUEST} from './types'
import { signupSaga} from './sagas/user'

export default function* rootSagas(action) {
  yield takeLatest(USER_SIGN_UP_REQUEST, signupSaga)
}
