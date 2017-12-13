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
  export default {
    name: 'header',
    data () {
      return {
      }
    },
    created () {
      this.$store.dispatch('getProducts', {b: this.$route.query.b, c: this.$route.query.c})
    },
    computed: {
      ...mapGetters({
        productData: 'productData'
      })
    }
  }
</script>
