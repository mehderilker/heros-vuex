<template>
  <div id="app">
    <AddHero/>
  </div>
</template>
<script>
import AddHero from './components/AddHero.vue'

export default {
  name: 'App',
  components: {
    AddHero
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 300px;
  margin: 60px auto;
  color: #2c3e50;
}
</style>
