<template>
  <div :style="style">{{ temp }}</div>
</template>

<script>
import { withComputed } from './mixins/mixinComputed'

export default {
  name: 'Temp',
  props: ['temp', 'styled'],
  mixins: [withComputed]
}
</script>

<style lang="scss" scoped>

</style>
