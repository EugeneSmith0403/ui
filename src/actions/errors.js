import {
  USER_ERROR
} from './../types'

export const userError = (error) =>{
  localStorage.removeItem('jwt-access')
  localStorage.removeItem('jwt-refresh')
  return {
    type: USER_ERROR,
    error
  }
}
