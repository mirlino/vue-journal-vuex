import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-demos-28d03-default-rtdb.firebaseio.com/'
})

export default journalApi