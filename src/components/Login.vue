<script>

import {fetchUserDetails, login} from '../module/api'

export default {
  data() {
    return {
      wrongPass: false,
      email: "",
      password: ""
    }
  },
  methods: {
    submit() {
      login(this.email, this.password)
          .then((data) => {
            this.wrongPass = !data.success
          })
    },
    refresh() {
      fetchUserDetails()
          .then((data) => {
            console.log(data)
            this.email = data.email
          })

    }
  }
}
</script>

<template>
  <form>
    <div>
      <label name="email">email</label>
      <input type="text" v-model="email">
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

  <h1>{{ email }}</h1>
  <h2>{{ password }}</h2>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
