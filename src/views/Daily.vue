<template>
  <div class="daily-wrapper">
    <div>
      {{ GET_COORDS.lat }} / {{ GET_COORDS.lon }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Daily',
  computed: {
    ...mapGetters(['GET_COORDS', 'GET_DAILY'])
  },
  watch: {
    GET_COORDS: function (v, ov) {
      this.$store.dispatch('ACT_DAILY', v)
    },
    GET_DAILY: function (v, ov) {
      console.log(v)
    }
  },
  created () {
    this.$store.dispatch('ACT_COORDS')
  }
}
</script>

<style lang="scss" scoped>

</style>
