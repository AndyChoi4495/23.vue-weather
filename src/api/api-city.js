import axios from 'axios'

export default () => {
  return axios.get('/json/city.json')
}
