<template>
  <ul>
    <List v-for="v in val" :key="v.dt" :v="v" />
  </ul>
</template>

<script>
import List from './List.vue'

export default {
  name: 'ListWrap',
  components: { List },
  props: ['days'],
  computed: {
    val: function () {
      return Number(this.days.cod) === 200
        ? this.days.list
        : []
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  @include flex($w: wrap);
  li {
    width: 49%;
    margin-right: 1%;
    @include MD {
      font-size: .875em;
    }
    @include SM {
      width: 99%;
    }
  }
}
</style>
