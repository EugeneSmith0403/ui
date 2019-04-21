import {
  USER_ERROR
} from './../types'

export const userError = (error) =>({
  type: USER_ERROR,
  error
})
