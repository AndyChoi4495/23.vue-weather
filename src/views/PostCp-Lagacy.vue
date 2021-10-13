<template>
  <div class="posts-wrapper">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <td>번호</td>
          <td>제목</td>
          <td>내용</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in posts" :key="v.id">
          <td>{{ v.id }}</td>
          <td>{{ v.title }}</td>
          <td>{{ v.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts',
  data () {
    return {
      posts: []
    }
  },
  async created () {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const { data } = await axios.get(url)
    this.posts = data
  }
}
</script>

<style lang="scss" scoped>
.posts-wrapper {
  width: 90%;
  max-width: 720px;
  margin: 2em auto;
  overflow-y: auto;
}
</style>
