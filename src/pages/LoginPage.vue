<template>
  <div>
    <h2>Please login</h2>
    Username: <input type="text" v-model="username"/> {{username}}<br/>
    Password: <input type="password" v-model="password"/> <br/>
    <button @click="login">Login</button>
  </div>
</template>

<style src="./css/login-page.css" scoped></style>

<script>
  export default {
    name: 'login-page',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        const data = {
          username: this.username,
          password: this.password
        }

        console.log(data)
        this.$router.push('/product')
      }
    }
  }
</script>
