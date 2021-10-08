<template>
  <div></div>
</template>

<script>
import { apiCoords } from './api/api-coords'
import apiDaily from './api/api-daily'

export default {
  name: 'Weather03',
  data () {
    return {
      lat: 0,
      lon: 0,
      daily: null
    }
  },
  async created () {
    const { coords } = await apiCoords()
    this.lat = coords.latitude
    this.lon = coords.longitude
    const { data } = await apiDaily(this.lat, this.lon)
    console.log(data)
  }
}
</script>

<style lang="scss">

</style>
