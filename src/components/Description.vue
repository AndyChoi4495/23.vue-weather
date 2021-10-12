<template>
  <div :style="style">{{ desc }}</div>
</template>

<script>
export default {
  name: 'Description',
  props: ['desc', 'styled'],
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
