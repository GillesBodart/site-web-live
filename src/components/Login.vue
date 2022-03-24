<script>

import {fetchUserDetails} from '../module/api'

export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    refresh() {
      fetchUserDetails()
          .then((data) => {
            console.log(data)
            this.username = data.username
          })

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
  <button @click="refresh"> refresh</button>

  <h1>{{ username }}</h1>
  <h2>{{ password }}</h2>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
