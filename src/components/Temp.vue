<template>
  <div :style="style">{{ temp }}</div>
</template>

<script>
export default {
  name: 'Temp',
  props: ['temp', 'styled'],
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
