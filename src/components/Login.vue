<script>

import {fetchUserDetails, login} from '../module/api'

export default {
  data() {
    return {
      wrongPass: false,
      username: "",
      password: ""
    }
  },
  methods: {
    submit() {
      login(this.username, this.password)
          .then((data) => {
            this.wrongPass = !data.success
          })
    },
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
  
  <div>
    <button @click="refresh">refresh</button>
    <button @click="submit">login</button>
  </div>

  <h1 v-if="wrongPass" style="color: darkred">Wrong Password</h1>

  <h1>{{ username }}</h1>
  <h2>{{ password }}</h2>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
