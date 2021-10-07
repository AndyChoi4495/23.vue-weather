<template>
  <div class="app-wrapper">
    <Header/>
    <router-view class="router-view" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/inc/Header.vue'
import Footer from './components/inc/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer }
}
</script>

<style lang="scss">
.app-wrapper {
  height: 100vh;
  @include flex;
  @include flexCol;
  .router-view {
    flex-grow: 1;
  }
}
</style>
