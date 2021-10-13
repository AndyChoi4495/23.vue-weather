<template>
  <div class="days">
    <City :styled="{ size: '1.75em' }" :name="city" class="city" />
    <ListWrap class="list-wrap" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import City from '../components/City.vue'
import ListWrap from '../components/ListWrap.vue'

export default {
  name: 'Days',
  components: { City, ListWrap },
  props: [],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['GET_COORDS', 'GET_DAYS']),
    city: function () {
      return (Number(this.GET_DAYS.cod) === 200)
        ? `${this.GET_DAYS.city.name}, ${this.GET_DAYS.city.country}`
        : ''
    }
  },
  watch: {
    GET_COORDS: function (v, ov) {
      this.$store.dispatch('ACT_DAYS', v)
    }
  },
  methods: {

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
