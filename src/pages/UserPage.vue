<template>
  <div>
    <router-link to="/dashboard">Back</router-link><br/>
    <h2>Users</h2>
    <div>
      Username: <input type="text" v-model="userData.username"/><br/>
      Password: <input type="password" v-model="userData.password"/><br/>
      Full Name: <input type="text" v-model="userData.fullname"/><br/>
      Role: <select v-model="userData.role">
      <option value="admin">Admin</option>
      <option value="regular">Regular User</option>
      </select><br/>
      <button @click="saveData">Save</button>
    </div>
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>Username</td>
            <td>Full Name</td>
            <td>Role</td>
            <td>*</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <td>{{user.username}}</td>
            <td>{{user.fullname}}</td>
            <td>{{user.role}}</td>
            <td><button @click="deleteData(user)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        userData: {}
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
