<template>
  <div id="app">
    <loader></loader>
    <router-view/>
  </div>
</template>

<script>
  import Loader from './components/shared/loader'
 // import firebase from 'firebase'
 // import { config } from './firebase-config'

 /* let app = firebase.initializeApp(config)
  let db = app.database()
  let bookRef = db.ref('books') */

  export default {
    name: 'app',
    components: {
      Loader
    },
    firebase: {
      // books: bookRef
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
