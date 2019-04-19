import axios from 'axios'
export default {
  user: {
    checkUserSignUp: (params) => axios.post('/api/checkUserSignUp', params).then(res=>res.data.results.key),
    signup: (params) => axios.post('/api/signup', params).then(res=>res.data.results),
    confirmEntranceSignup: (mailToken)=> axios
      .post('/api/confirmEntranceSignup', {mailToken})
      .then(res=>res.data.results),
    fetchCurrentUser: (params)=> axios
      .post('/api/fetchCurrentUser', params)
      .then(res=>res.data.results.user),
    login: (credentials) => axios.post('/api/login', {credentials}).then(user=>user.data.results)
  }
}
