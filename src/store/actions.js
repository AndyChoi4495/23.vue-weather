import { apiCoords } from '../api/api-coords'
import apiWeather from '../api/api-weather'
import apiCity from '../api/api-city'
import { DEF_COORDS } from '../modules/common'

const ACT_COORDS = async ({ commit }, v) => {
  try {
    if (v) {
      commit('MUT_COORDS', v)
    } else {
      const { lat, lon } = await apiCoords()
      commit('MUT_COORDS', { lat, lon })
    }
  } catch (err) {
    commit('MUT_COORDS', { lat: DEF_COORDS.lat, lon: DEF_COORDS.lon })
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

const ACT_CITY = async ({ commit }) => {
  const { data } = await apiCity()
  commit('MUT_CITY', data.city)
}

export default { ACT_COORDS, ACT_DAILY, ACT_DAYS, ACT_CITY }
