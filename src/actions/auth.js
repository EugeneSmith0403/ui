import {USER_SIGN_UP,
  USER_SIGN_UP_REQUEST ,
  USER_LOGIN,
  USER_LOGIN_REQUEST,
  USER_ERROR,
  CONFIRM_ENTRANCE_SIGNUP ,
  CONFIRM_ENTRANCE_SIGNUP_REQUEST,
  FETCH_USER_REQUEST,
  FETCH_USER
 } from './../types'

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

export const loginRequestAction = (user) => ({
  type: USER_LOGIN_REQUEST,
  user
})
export const userErrorAction = (error) => ({
  type: USER_ERROR,
  error
})

export const confirmEntranceSignupRequestAction = (token) => ({
  type: CONFIRM_ENTRANCE_SIGNUP_REQUEST,
  token
})

export const confirmEntranceSignup = (token) => ({
  type: CONFIRM_ENTRANCE_SIGNUP,
  token
})

export const fetchUserRequest = (user) => ({
  type: FETCH_USER_REQUEST,
  user
})

export const fetchUser = (user) => ({
  type: FETCH_USER,
  user
})
