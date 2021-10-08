import { apiCoords } from '../api/api-coords'
import apiDaily from '../api/api-daily'

const ACT_COORDS = async ({ commit }) => {
  try {
    const { lat, lon } = await apiCoords()
    commit('MUT_COORDS', { lat, lon })
  } catch (err) {
    console.log(err)
  }
}

const ACT_DAILY = async ({ commit }, v) => {
  const { data } = await apiDaily(v)
  commit('MUT_DAILY', data)
}

const ACT_DAYS = () => {

}

export default { ACT_COORDS, ACT_DAILY, ACT_DAYS }
