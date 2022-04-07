<script>

import {fetchUserDetails, login} from '../module/api'

export default {
  data() {
    return {
      wrongPass: false,
      token: null,
      email: "",
      password: ""
    }
  },
  methods: {
    submit() {
      login(this.email, this.password)
          .then((data) => {
            this.wrongPass = !data.success
            this.token = data.token
          })
    },
    refresh() {
      fetchUserDetails(this.token)
          .then((data) => {
            console.log(data)
            this.email = data.email
          })

    }
  }
}
</script>

<template>

  <div class="card">
    <div class="card-content">
      <p class="title">
        Already a member?
      </p>
      <p class="subtitle">
        Sign in to continue.
      </p>
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
        <button @click="refresh" class="button mr-2 is-2">Refresh</button>
        <button @click="submit" class="button  is-2">Login</button>
      </div>
      <h6 class="subtitle is-6 has-text-centered">or</h6>
      <div class="has-text-centered">
        <a class="button is-danger">Google</a>
      </div>
    </div>
  </div>


  <h1 v-if="wrongPass" style="color: darkred">Wrong Password</h1>

  <h1>{{ email }}</h1>
  <h2>{{ password }}</h2>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
