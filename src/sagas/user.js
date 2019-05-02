import api from './../api'
import {
  signupAction,
  userErrorAction,
  confirmEntranceSignup,
  loginAction,
  fetchUser,
  logout
} from './../actions/auth'
import { updateProfile } from './../actions/user'

import {userError} from './../actions/errors'
import setToken from './../helpers/setToken'
import {call, put} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { encrypt } from './../helpers/encrypt'
import sendDataWithTokenSaga, { helperSagaRequest } from './utils/sagaCheckToken'

export function* signupSaga(action) {
  const params = {
    ...action.user
  }
  try{
    const key = yield api.user.checkUserSignUp({email: params.email});
    //TODO какая то херня с логикой шифрования пароля надо пофиксить
    const request = yield api.user.signup({
      email: params.email,
      password: encrypt(params.password, key.toString())
    })
    yield put(signupAction(request))
    localStorage.setItem('publicKey', request.publicKey);
  //  yield put(push('/'));

  }catch(e) {
    yield put(userError(e.response))
  }

}

export function* confirmEntranceSaga(action) {
  try{
    const userInfo = yield api.user.confirmEntranceSignup(action.token)
    const {user} = userInfo
    localStorage.setItem('jwt-access', user.accessToken)
    localStorage.setItem('jwt-refresh', user.refreshToken)
    localStorage.setItem('email', user.email)
    yield put(confirmEntranceSignup(userInfo))
  }
  catch(e) {
    yield put(userError(e.response))
  }
}

export function* fetchUserSaga() {
  yield sendDataWithTokenSaga(
    helperSagaRequest(api.user.fetchCurrentUser, {}), fetchUser
  );
}
export function* updateUserProfileSaga(action) {
  yield sendDataWithTokenSaga(
    helperSagaRequest(api.user.updateProfile, action.data), updateProfile
  )
}

export function* loginSaga(action) {
  try{
    const params = {
      ...action.user
    }
    const key = yield api.user.checkUserLogin({email: params.email});

    const request = yield api.user.login({
      email: params.email,
      password: encrypt(params.password, key.toString())
    })
    localStorage.setItem('jwt-access', request.accessToken)
    localStorage.setItem('jwt-refresh', request.refreshToken)
    const currentUser = {
        username: request.username,
        email: request.email,
        confirmed: request.confirmed
    }
    yield put(loginAction(currentUser))
    yield put(push('/'))

  }catch(e) {
    yield put(userError(e.response))
  }
}

export function* logoutSaga() {
  try{
    const accessToken = localStorage.getItem('jwt-access')
    setToken(accessToken)
    const request = yield api.user.logout();
    localStorage.removeItem('jwt-access')
    localStorage.removeItem('jwt-refresh')
    yield put(logout({}))
    yield put(push('/'));

  }catch(e) {
    yield put(userError(e.response))
  }

}
