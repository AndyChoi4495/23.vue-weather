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

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { Header, Footer },
  // computed: {
  //   ...mapGetters(['GET_COORDS'])
  // },
  created () {
    console.log(...mapGetters(['GET_COORDS']))
    // this.$store.dispatch('ACT_COORDS')
  }
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
