import axios from 'axios'
export default {
  user: {
    checkUserSignUp: (params) => axios.post('/api/checkUserSignUp', params).then(res=>res.data.results.key),
    checkUserLogin: (params) => axios.post('/api/checkUserLogin', params).then(res=>res.data.results.key),
    signup: (params) => axios.post('/api/signup', params).then(res=>res.data.results),
    confirmEntranceSignup: (mailToken)=> axios
      .post('/api/confirmEntranceSignup', {mailToken})
      .then(res=>res.data.results),
    fetchCurrentUser: ()=> axios
      .post('/api/fetchCurrentUser')
      .then(res=>res.data.results.user),
    login: (credentials) => axios.post('/api/login', credentials).then(user=>user.data.results.user),
    logout: () => axios.post('/api/logout').then(result=> result.data.results),
    updateProfile: (credentials) => axios.put('/api/userProfile', credentials, {
            headers: { 'content-type': 'multipart/form-data' }
        }).then(result=> result.data.results),
  }
}
