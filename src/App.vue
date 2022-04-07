<script setup>
import Google from './components/Google.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'</script>

<template>
  <section class="container">
    <h1>
      Hello Twitch!
    </h1>
    <Login/>
    <Register/>
    <Google/>
  </section>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
