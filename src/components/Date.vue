<template>
  <div :style="style">{{ date }}</div>
</template>

<script>
export default {
  name: 'Date',
  props: ['date', 'styled'],
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
