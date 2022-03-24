<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  }
}
</script>

<template>
  <form>
    <div>
      <label name="username">Username</label>
      <input type="text" v-model="username">
    </div>
    <div>
      <label name="password">Password</label>
      <input type="password" v-model="password">
    </div>
  </form>

  <h1>{{ username }}</h1>
  <h2>{{ password }}</h2>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
