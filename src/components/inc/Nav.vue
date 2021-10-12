<template>
  <ul class="navi-wrap">
    <li>
      <router-link to="/">Daily</router-link>
    </li>
    <li>
      <router-link to="/5days">5Days</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
ul.navi-wrap {
  @include flex;
  li {
    font-size: .75em;
    cursor: pointer;
    a {
      display: block;
      padding: .875em 1.25em;
    }
    &:hover {
      background-color: $secondary-color;
      color: $dark-color;
    }
  }
}
</style>
