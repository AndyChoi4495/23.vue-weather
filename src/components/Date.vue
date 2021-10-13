<template>
  <div :style="style">{{ date }}</div>
</template>

<script>
import { withComputed } from './mixins/mixinComputed.js'

export default {
  name: 'Date',
  props: ['date', 'styled'],
  mixins: [withComputed]
}
</script>

<style lang="scss" scoped>

</style>
