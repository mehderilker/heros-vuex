<template>
  <div id="app">
    <AddHero/>
    <ListHero/>
  </div>
</template>
<script>
import AddHero from './components/AddHero.vue'
import ListHero from './components/ListHero.vue'

export default {
  name: 'App',
  components: {
    AddHero,
    ListHero
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
