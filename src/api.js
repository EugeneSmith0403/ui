import axios from 'axios'
export default {
  user: {
    checkUser: (params) => axios.post('/api/checkUser', params).then(res=>res.data.results.key),
    signup: (params) => axios.post('/api/auth', params).then(res=>res.data.results)
  }
}
