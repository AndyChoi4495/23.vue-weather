import { apiCoords } from '../api/api-coords'
import apiWeather from '../api/api-weather'

const ACT_COORDS = async ({ commit }) => {
  try {
    const { lat, lon } = await apiCoords()
    commit('MUT_COORDS', { lat, lon })
  } catch (err) {
    console.log(err)
  }
}

const ACT_DAILY = async ({ commit }, v) => {
  const { data } = await apiWeather('daily', v)
  commit('MUT_DAILY', data)
}

const ACT_DAYS = async ({ commit }, v) => {
  const { data } = await apiWeather('days', v)
  commit('MUT_DAYS', data)
}

export default { ACT_COORDS, ACT_DAILY, ACT_DAYS }
