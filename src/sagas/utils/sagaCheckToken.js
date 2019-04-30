import {userError} from './../../actions/errors'
import setToken from './../../helpers/setToken'
import {call, put} from 'redux-saga/effects'

export const helperSagaRequest = (fn, params) => {
  return () => fn.call(this, params)
}

export default function* sendDataWithTokenSaga(request, reduxAction) {
  try{
    const accessToken = localStorage.getItem('jwt-access') || null
    setToken(accessToken)
    const response = yield request()
    yield put(reduxAction(response))
  } catch(e) {
    try{
      const refreshToken = localStorage.getItem('jwt-refresh')
      setToken(refreshToken)
      const response = yield request()
      localStorage.setItem('jwt-access',  response.accessToken)
      localStorage.setItem('jwt-refresh', response.refreshToken)
      yield put(reduxAction(response))
    }catch(e){
      yield put(userError(e.response))
    }
  }
}
