<template>
  <h3 :style="style">{{ name }}</h3>
</template>

<script>
export default {
  name: 'City',
  props: ['name', 'styled'],
  computed: {
    style: function () {
      if (this.styled) {
        return `
          font-size: ${this.styled.size || 'inherit'};
          color: ${this.styled.color || 'inherit'};`
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
