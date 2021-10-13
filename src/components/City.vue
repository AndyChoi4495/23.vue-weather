<template>
  <h3 :style="style">{{ name }}</h3>
</template>

<script>
import { withComputed } from './mixins/mixinComputed.js'

export default {
  name: 'City',
  props: ['name', 'styled'],
  mixins: [withComputed]
}
</script>

<style lang="scss" scoped>

</style>
