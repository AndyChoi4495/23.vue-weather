<template>
  <div :style="style" class="wind-wrap">
    <i class="fa fa-arrow-down" :style="angle"></i>
    <span class="direction">{{ direction }}</span>
    <span>{{ speed }}</span> m/s
  </div>
</template>

<script>
import { withComputed } from './mixins/mixinComputed'

export default {
  name: 'Wind',
  props: ['deg', 'speed', 'styled'],
  mixins: [withComputed],
  computed: {
    angle: function () {
      return `transform: rotate(${this.deg}deg)`
    },
    direction: function () {
      const deg = this.deg
      if (deg < 15) {
        return '북풍'
      } else if (deg < 75) {
        return '북동풍'
      } else if (deg < 105) {
        return '동풍'
      } else if (deg < 165) {
        return '남동풍'
      } else if (deg < 195) {
        return '남풍'
      } else if (deg < 255) {
        return '남서풍'
      } else if (deg < 285) {
        return '서풍'
      } else if (deg < 345) {
        return '북서풍'
      } else {
        return '북풍'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wind-wrap {
  i {
    margin-right: .5em;
  }
  .direction {
    margin-right: .75em;
  }
}
</style>
