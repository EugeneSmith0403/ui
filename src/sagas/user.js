import api from './../api'
import {
  signupAction,
  userErrorAction,
  confirmEntranceSignup,
  loginAction,
  fetchUser,
  logout
} from './../actions/auth'

import {userError} from './../actions/errors'


import {call, put} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import crypto from 'crypto'
const algorithm = 'aes-256-ctr';

/*TODO вынести в хелпер*/
function encrypt(text, password){
  var cipher = crypto.createCipher(algorithm, password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

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
  try{
    const accessToken = localStorage.getItem('jwt-access') || null
    const response = yield api.user.fetchCurrentUser({accessToken})
    yield put(fetchUser(response))
  } catch(e) {
    try{
      const refreshToken = localStorage.getItem('jwt-refresh')
      const response = yield api.user.fetchCurrentUser({refreshToken})
      localStorage.setItem('jwt-access', "Bearer " + response.accessToken)
      localStorage.setItem('jwt-refresh', response.refreshToken)
      yield put(fetchUser(response))
    }catch(e){
      yield put(userError(e.response))
    }
  }
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
    localStorage.setItem('jwt-access', "Bearer " + request.accessToken)
    localStorage.setItem('jwt-refresh', request.refreshToken)
    yield put(loginAction(request))
    yield put(push('/'))

  }catch(e) {
    yield put(userError(e.response))
  }
}

export function* logoutSaga() {
  try{
    const accessToken = localStorage.getItem('jwt-access')
    let clearTokenn = accessToken && accessToken.split(' ')[1]
    const request = yield api.user.logout(clearTokenn);
    localStorage.removeItem('jwt-access')
    localStorage.removeItem('jwt-refresh')
    yield put(logout({}))
    yield put(push('/'));

  }catch(e) {
    yield put(userError(e.response))
  }

}
