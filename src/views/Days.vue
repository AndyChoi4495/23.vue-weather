<template>
  <div class="days">
    <City :styled="{ size: '1.75em' }" :name="city" class="city" />
    <ListWrap class="list-wrap" :days="days" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import City from '../components/City.vue'
import ListWrap from '../components/ListWrap.vue'

import apiDays from '../api/api-days'

export default {
  name: 'Days',
  components: { City, ListWrap },
  props: [],
  data () {
    return {
      days: {}
    }
  },
  computed: {
    ...mapGetters(['GET_COORDS']),
    city: function () {
      return (Number(this.days.cod) === 200)
        ? `${this.days.city.name}, ${this.days.city.country}`
        : ''
    }
  },
  watch: {
    GET_COORDS: async function (v, ov) {
      // this.$store.dispatch('ACT_DAYS', v)
      const { data } = await apiDays(v)
      this.days = data
    }
  },
  created () {
    if (!this.GET_COORDS.lat) {
      this.$store.dispatch('ACT_COORDS')
    } else {
      this.$store.dispatch('ACT_COORDS', {
        lat: this.GET_COORDS.lat,
        lon: this.GET_COORDS.lon
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.days {
  padding: 1em 0 1em 1em;
  @include flex;
  @include flexCol;
  .city {
    margin-bottom: .5em;
  }
  .list-wrap {
    flex-grow: 1;
    overflow-y: auto;
    max-height: calc(100vh - 11em)
  }
}
</style>
