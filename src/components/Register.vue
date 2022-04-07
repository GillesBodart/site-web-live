<script>

import {createUser} from '../module/api'

export default {
  data() {
    return {
      created: null,
      username: "",
      password: "",
      email: ""
    }
  },
  methods: {
    register() {
      createUser(this.username, this.password, this.email)
          .then((data) => {
            this.created = data.user_created
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
      <label name="email">email</label>
      <input type="email" v-model="email">
    </div>
    <div>
      <label name="password">Password</label>
      <input type="password" v-model="password">
    </div>
  </form>

  <div>
    <button @click="register">register</button>
  </div>

  <h3 v-if="created" style="color:#27ae60 ">User created</h3>
  <h3 v-if="!created" style="color:#c0392b ">Email already taken</h3>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
