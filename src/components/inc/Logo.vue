<template>
  <h1 class="logo">
    <router-link to="/">
      <i class="fa fa-sun" />
      날씨앱
      <small>v 0.1</small>
    </router-link>
  </h1>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
h1.logo {
  a {
    display: block;
    padding: .5em;
  }
}
</style>
