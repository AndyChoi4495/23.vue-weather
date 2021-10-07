<template>
  <header class="header-wrapper">
    <h1 class="logo">
      <b-icon-compass />
      날씨앱
      <small>v 0.1</small>
    </h1>
    <Nav />
  </header>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Header',
  components: { Nav },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  @include flex($h: space-between);
  background-color: $dark-color;
  color: $light-color;
  font-size: 1.5em;
  .logo {
    padding: .5em;
  }
}
</style>
