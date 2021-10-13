<template>
  <div :style="style">{{ desc }}</div>
</template>

<script>
import { withComputed } from './mixins/mixinComputed'

export default {
  name: 'Description',
  props: ['desc', 'styled'],
  mixins: [withComputed]
}
</script>

<style lang="scss" scoped>

</style>
