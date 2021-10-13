<template>
  <div class="daily-wrapper">
    <div class="city-wrap">
      <h2 class="title">도시별 날씨 정보</h2>
      <b-form-select v-model="selected" :options="options" size="lg" />
      <b-button
        variant="primary"
        @click="getPosition">
        현재위치 날씨정보
      </b-button>
    </div>
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
  data () {
    return {
      selected: null
    }
  },
  computed: {
    ...mapGetters(['GET_COORDS', 'GET_DAILY', 'GET_CITY']),
    options: function () {
      const city = []
      this.GET_CITY.forEach((v, i) => {
        if (i === 0) city.push({ value: null, text: '도시를 선택하세요' })
        if (v.title) {
          city.push({ value: null, text: '-----------------', disabled: true })
          city.push({ value: null, text: v.name, disabled: true })
          city.push({ value: null, text: '-----------------', disabled: true })
        } else {
          city.push({ value: { lat: v.lat, lon: v.lon }, text: v.name })
        }
      })
      return city
    },
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
    },
    selected: function (v, ov) {
      if (v) this.$store.dispatch('ACT_COORDS', v)
    }
  },
  methods: {
    getPosition () {
      this.selected = null
      this.$store.dispatch('ACT_COORDS')
    }
  },
  created () {
    if (!this.GET_COORDS.lat) this.$store.dispatch('ACT_COORDS')
    this.$store.dispatch('ACT_CITY')
  }
}
</script>

<style lang="scss" scoped>
.daily-wrapper {
  @include flex($h: center, $v: center);
  @include flexCol;
  .city-wrap {
    max-width: 300px;
    padding-bottom: 1em;
    margin-bottom: 1em;
    text-align: center;
    .title {
      font-size: 1.5em;
      margin-bottom: .5em;
    }
    select {
      margin-bottom: .5em;
    }
  }
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
