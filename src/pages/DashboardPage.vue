<template>
  <div>
    <h2>Dashboard</h2>
    <div class="side-menu">
      <h2>side menu</h2>
    </div>
    <div class="content-menu">
        <div v-for="item in productData">
          <div>{{item.name}}</div>
          <div>{{item.cost}}</div>
        </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'DashboardPage',
    data () {
      return {
      }
    },
    created () {
      this.$store.dispatch('getProducts')
    },
    computed: {
      ...mapGetters(['productData'])
    }
  }
</script>
<style>
  .side-menu{
    width: 30%;
    float: left;
  }
  .content-menu{
    width: 70%;
    float: left;
  }

  .item-container{
    width: 25%;
    float: left;
    background: #fdf6f6;
    padding: 1px;
    margin: 3px 5px;
  }
</style>
