import {USER_SIGN_UP,USER_SIGN_UP_REQUEST , USER_LOGIN, USER_ERROR} from './../types'

export const signupAction = (user) => ({
  type: USER_SIGN_UP,
  user
})
export const signupRequestAction = (user) => ({
  type: USER_SIGN_UP_REQUEST,
  user
})
export const loginAction = (user) => ({
  type: USER_LOGIN,
  user
})
export const userErrorAction = (error) => ({
  type: USER_ERROR,
  error
})
