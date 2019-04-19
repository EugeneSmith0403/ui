import api from './../api'
import {signupAction, userErrorAction, confirmEntranceSignup, loginAction, fetchUser} from './../actions/auth'
import {call, put} from 'redux-saga/effects'
import { push } from 'connected-react-router'

export function* signupSaga(action) {
  const params = {
    ...action.user
  }
  try{
    const key = yield api.user.checkUserSignUp({email: params.email});

    const request = yield api.user.signup({
      email: params.email,
      password: key
    })
    yield put(signupAction(request))
    localStorage.setItem('publicKey', request.publicKey);
  //  yield put(push('/'));

  }catch(e) {
    yield put(userErrorAction(e.response.data.errors))
  }

}

export function* loginSaga(action) {
  try{
    const params = {
      ...action.user
    }
    const request = yield api.user.login(params)
    yield put(loginAction(request))

  }catch(e) {
    yield put(userErrorAction(e.response.data.errors))
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
    yield put(userErrorAction(e.response.data.errors))
  }
}

export function* fetchUserSaga() {
  try{
    const accessToken = localStorage.getItem('jwt-access') || null
    const response = yield api.user.fetchCurrentUser({accessToken})
    console.log(response)
    yield put(fetchUser(response))
  } catch(e) {
    try{
      const refreshToken = localStorage.getItem('jwt-refresh')
      const response = yield api.user.fetchCurrentUser({refreshToken})
      console.log(response)
      localStorage.setItem('jwt-access', "Bearer " + response.accessToken)
      localStorage.setItem('jwt-refresh', response.refreshToken)
      yield put(fetchUser(response))
    }catch(e){
      yield put(userErrorAction(e.response.data.errors))
    }
  }
}
