<template>
<div>
  <div class="header-section">
    <div class="columns">
      <div class="column is-12">
        <div class="header-body">
          header section
            <div class="columns">
              <div class="column"></div>
            </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div class="grid-container outline">
    <div class="row">
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
    </div>
    <div class="row">
      <div class="col-2"><p>col-2</p></div>
      <div class="col-2"><p>col-2</p></div>
      <div class="col-2"><p>col-2</p></div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="row">
          <div class="col-3"><p>col-3</p></div>
          <div class="col-3"><p>col-3</p></div>
        </div>
      </div>
      <div class="col-3"><p>col-3</p></div>
    </div>
  </div>
  -->

</div>
</template>

<style src="./css/header-section.css"></style>
<script>
  import {mapGetters} from 'vuex'
  import firebase from 'firebase'
  import { config } from '../../firebase-config'
  let app = firebase.initializeApp(config)
  let db = app.database()
  let booksRef = db.ref('books')

  export default {
    name: 'header',
    data () {
      return {
        newTodoText: ''
      }
    },
    created () {
      this.$store.dispatch('setTodosRef', booksRef)
    },
    computed: {
      ...mapGetters({
        books: 'getBooks'
      })
    },
    methods: {
      removeTodo: function (todo) {
        booksRef.child(todo['.key']).remove()
      },
      addTodo: function () {
        if (this.newTodoText.trim()) {
          booksRef.push({
            text: this.newTodoText
          })
          this.newTodoText = ''
        }
      },
      updateTodoText: function (todo, newText) {
        booksRef.child(todo['.key']).child('text').set(newText)
      }
    }
  }
</script>
