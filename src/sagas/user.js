import api from './../api'
import {signupAction, userErrorAction} from './../actions/auth'
import {call, put} from 'redux-saga/effects'
import { push } from 'react-router-redux';

export function* signupSaga(action) {
  const params = {
    ...action.user
  }
  try{
    const key = yield api.user.checkUser({email: params.email});

    const request = yield api.user.signup({
      email: params.email,
      password: key
    })
    yield put(signupAction(request))
    yield put(push('/next-page'));

  }catch(e) {
    yield put(userErrorAction(e.response.data.errors))
  }

}
