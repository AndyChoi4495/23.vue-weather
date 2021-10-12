<template>
  <div :style="style">
    <img :src="src" :alt="title || 'icon'" class="w-100">
  </div>
</template>

<script>
export default {
  name: 'City',
  props: ['src', 'title', 'styled'],
  computed: {
    style: function () {
      if (this.styled && this.styled.width) {
        return `width: ${this.styled.width};`
      } else {
        return 'width: 120px;'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
