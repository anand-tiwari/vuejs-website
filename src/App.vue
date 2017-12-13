<template>
  <div id="app">
    <loader></loader>
    <router-view/>
  </div>
</template>

<script>
  import Loader from './components/shared/loader'
  export default {
    name: 'app',
    components: {
      Loader
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background: #F1F3F6
}
</style>
