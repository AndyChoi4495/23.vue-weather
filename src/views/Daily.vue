<template>
  <div class="daily-wrapper">
    <City :styled="{ size: '2em' }" :name="city" class="city" />
    <Icon :styled="{ width: '100px' }" :src="src" class="icon" />
    <Temp :styled="{ size: '1.5em', color: '#181114' }" :temp="temp" class="temp" />
    <Description :styled="{ size: '1.75em' }" :desc="desc" class="desc" />
    <Wind :styled="{ size: '1.25em' }" :deg="deg" :speed="speed" class="wind" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getIcon } from '../modules/util'
import { PLACEHOLDER } from '../modules/common'

import City from '../components/City.vue'
import Icon from '../components/Icon.vue'
import Temp from '../components/Temp.vue'
import Description from '../components/Description.vue'
import Wind from '../components/Wind.vue'

export default {
  name: 'Daily',
  components: { City, Icon, Temp, Description, Wind },
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
        : PLACEHOLDER
    },
    temp: function () {
      return (this.GET_DAILY.cod === 200)
        ? this.GET_DAILY.main.temp + '℃'
        : ''
    },
    desc: function () {
      return (this.GET_DAILY.cod === 200)
        ? this.GET_DAILY.weather[0].description + ' / ' + this.GET_DAILY.weather[0].main
        : ''
    },
    deg: function () {
      return (this.GET_DAILY.cod === 200)
        ? this.GET_DAILY.wind.deg
        : ''
    },
    speed: function () {
      return (this.GET_DAILY.cod === 200)
        ? this.GET_DAILY.wind.speed
        : ''
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
  .city {
    margin-bottom: 1em;
  }
  .icon {
    margin-bottom: 1em;
  }
  .temp {
    margin-bottom: 1em;
  }
  .desc {
    margin-bottom: 1em;
  }
}
</style>
