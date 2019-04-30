import {
  USER_PROFILE_UPDATED,
  USER_PROFILE_UPDATED_REQUEST
} from './../types'

export const updateProfileRequest = (data) => ({
  type: USER_PROFILE_UPDATED_REQUEST,
  data
})
export const updateProfile = (data) => ({
  type: USER_PROFILE_UPDATED,
  data
})
