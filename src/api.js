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
    updateProfile: (credentials) => axios.put('/api/userProfile', credentials)
      .then(result=> result.data.results),
  },
  trip: {
    getOneTrip: (id) => axios.get(`/api/trip/${id}`).then(result=> result.data.results),
    searchTrips: (searchParams) =>axios.get(`api/trip/search?from=${searchParams.from.lat},${searchParams.from.lng}&to=${searchParams.to.lat},${searchParams.to.lng}`, )
      .then(results=>results.data.results),
    createTrip: (credentials) => axios.post('/api/trip/create', credentials)
      .then(result=> result.data.results),
      updateTrip: (id, data) => axios.put(`/api/trip/update/${id}`, data)
        .then(result=> result.data.results),
    getUserTrips: (email)=> axios.get(`api/trip/search?email=${email}`)
      .then(results=>results.data.results)
  }
}
