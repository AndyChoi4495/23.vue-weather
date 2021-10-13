import { apiCoords } from '../api/api-coords'
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

export default { ACT_COORDS }
