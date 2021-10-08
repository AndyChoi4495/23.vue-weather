<template>
  <ul class="navi-wrap">
    <li class="navi">
      <router-link to="/">Daily</router-link>
      </li>
    <li class="navi">
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
ul {
  @include flex;
  li {
    font-size:  .75em;
    cursor: pointer;
    a {
      display: block;
      padding: .875em 1.25em;
      &:hover {
        color: inherit;
        text-decoration: none;
      }
    }
    &:hover {
      background-color: $secondary-color;
      color: $dark-color;
    }
  }
}
</style>
