<template>
  <div>
    <div class="columns">
      <div class="side-menu column is-2">
        <left-side></left-side>
      </div>
      <div class="content-menu column is-10">
        <product-list-side></product-list-side>
      </div>
    </div>
  </div>
</template>

<script>
  import leftSide from '../components/letfSide'
  import productListSide from '../components/productListSide'
  export default {
    name: 'DashboardPage',
    components: {
      leftSide,
      productListSide
    },
    data () {
      return {
      }
    }
  }
</script>
<style>
  .side-menu{
  }
  .content-menu{
  }
</style>
