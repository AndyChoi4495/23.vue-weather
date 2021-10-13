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
        <tr v-for="v in lists" :key="v.id">
          <td>{{ v.id }}</td>
          <td>{{ v.title }}</td>
          <td>{{ v.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: ['lists']
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
