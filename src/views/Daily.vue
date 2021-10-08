<template>
  <div class="daily-wrapper">
    <h2 class="city-wrap">
      {{ city }}
    </h2>
    <div class="img-wrap">
      <img :src="src" alt="">
    </div>
    <div class="temp-wrap">
        {{ temp }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getIcon } from '../modules/util'

export default {
  name: 'Daily',
  computed: {
    ...mapGetters(['GET_COORDS', 'GET_DAILY']),
    city: function () {
      return (this.GET_DAILY.cod === 200)
        ? `${this.GET_DAILY.name}, ${this.GET_DAILY.sys.country}`
        : ''
    },
    src: function () {
      return (this.GET_DAILY.cod === 200)
        ? getIcon(this.GET_DAILY.weather[0].icon)
        : 'https://via.placeholder.com/50x50?text=No+Icon'
    },
    temp: function () {
      return (this.GET_DAILY.cod === 200)
        ? this.GET_DAILY.main.temp + 'C'
        : 'https://via.placeholder.com/50x50?text=No+Icon'
    }
  },
  watch: {
    GET_COORDS: function (v, ov) {
      this.$store.dispatch('ACT_DAILY', v)
    }
  },
  created () {
    this.$store.dispatch('ACT_COORDS')
  }
}
</script>

<style lang="scss" scoped>
.daily-wrapper {
  @include flex($h: center, $v: center);
  @include flexCol;
}
</style>
