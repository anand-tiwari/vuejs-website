<template>
  <div>
    <router-link to="/product">Back</router-link><br/>
    <h2>Product Detail Page !!!</h2>
    <h2>{{ $route.query.id }}</h2>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
      }
    },
    created () {
      this.$store.dispatch('getUsers')
    },
    computed: {
      ...mapGetters(['users'])
    },
    methods: {
      saveData () {
        this.users.push(Object.assign({}, this.userData))
      },
      deleteData (user) {
        this.users = this.users.filter(
          (u) => u.username !== user.username
        )
      }
    }
  }
</script>
