<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="updateCount">카운트 올리기</button>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

// import apiCoords from './api/api-coords'

export default {
  name: 'Getters01',
  data () {
    return {
      count: 0
    }
  },
  watch: {
    // 1. 내가 변하면 함수를 실행한다.
    // 2. 변수값이 바뀌면 자동으로 실행될 사항들을 선언
    counter: function (v, ov) {
      console.log(' 지금 값: ', +v, ' / 이전 값: ' + ov)
    }
  },
  methods: {
    updateCount () {
      this.count++
    }
  }
}
</script>

<style lang="scss">

</style>
