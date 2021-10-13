<template>
  <div class="users-wrapper">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <td>번호</td>
          <td>이름</td>
          <td>전화번호</td>
          <td>이메일</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in lists" :key="v.id">
          <td>{{ v.id }}</td>
          <td>{{ v.name }}</td>
          <td>{{ v.phone }}</td>
          <td>{{ v.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Users',
  props: ['lists']
}
</script>

<style lang="scss" scoped>
.users-wrapper {
  width: 90%;
  max-width: 720px;
  margin: 2em auto;
  overflow-y: auto;
}
</style>
