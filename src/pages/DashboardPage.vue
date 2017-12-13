<template>
  <div>
      <header-section></header-section>
      <div class="columns">
        <div class="side-menu column is-2">
          <left-nav-container-section></left-nav-container-section>
        </div>
        <div class="content-menu column is-10">
          <product-list-container-section></product-list-container-section>
        </div>
      </div>
  </div>
</template>

<script>
  import leftNavContainerSection from '../components/leftNavContainerSection'
  import productListContainerSection from '../components/productListContainerSection'
  import headerSection from '../components/shared/headerSection'
  export default {
    name: 'DashboardPage',
    components: {
      leftNavContainerSection,
      productListContainerSection,
      headerSection
    },
    data () {
      return {
      }
    }
  }
</script>
<style>
  .side-menu{
    padding: 0;
  }
  .content-menu{
    margin: 12px 0 12px 0;
  }
</style>
