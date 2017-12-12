<template>
  <div>
    <router-link to="/product">Back</router-link><br/>
    <h2>Product Detail Page !!!</h2>
    <h2>{{ $route.params.id }}</h2>
    <div class="columns">
      <div class="column is-6" v-for="item in productDetail">
        <div class="product-banner">
          <meta itemprop="image" content="~assets/lazy-load.svg">
          <img class="lazyloaded" alt="Oberlo app banner" data-src="~assets/phone.jpg"
               src="~assets/phone.jpg" width="160" height="160">
        </div>
        <div class="product-body">
          <p class="product-name" itemprop="name">{{item.name}}</p>
          <p class="product-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
            <span itemprop="price">{{item.cost}}</span>
          </p>
          <p class="product-rating">
            <span class="product-reviews">1477 reviews</span>
            <span data-review-type="star" class="product-rating-star-halves product-rating-star-halves-10"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./css/product-detail-page.css" scoped></style>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
      }
    },
    created () {
      this.$store.dispatch('getProductById', {id: this.$route.params.id})
    },
    computed: {
      ...mapGetters({
        productDetail: 'getProductDetail'
      })
    },
    methods: {
    }
  }
</script>
