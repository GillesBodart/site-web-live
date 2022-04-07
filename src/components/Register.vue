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
  <div class="card">
    <div class="card-content">
      <p class="title">
        Register
      </p>
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" placeholder="Username" v-model="username">
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email address" v-model="email">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="My password" v-model="password">
        </div>
      </div>
      <div class="py-2 columns is-centered has-text-centered">
        <button @click="register" class="button is-2">register</button>

      </div>
      <footer>
        <h3 v-if="created" style="color:#27ae60 ">User created</h3>
        <h3 v-if="!created" style="color:#c0392b ">Email already taken</h3>
      </footer>
    </div>
  </div>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
