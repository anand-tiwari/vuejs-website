<template>
  <div class="container is-fluid">
    <div class="columns is-multiline">
      <div v-for="item in productData" class="item-container column is-2">
        <router-link :to="{ name: 'Productdetail' , params:{id:item.id}}">
          <div class="product-banner">
            <meta itemprop="image" content="~assets/lazy-load.svg">
            <img class="lazyloaded" alt="Oberlo app banner" data-src="~assets/phone.jpg"
                 src="~assets/phone.jpg" width="160" height="160">
          </div>
          <div class="product-body">
            <p class="product-name" itemprop="name">{{item.name}}</p>
            <p class="product-name" itemprop="name">{{item.id}}</p>
            <p class="product-price" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
              <span itemprop="price">{{item.cost}}</span>
            </p>
            <p class="product-rating">
              <span class="product-reviews">1477 reviews</span>
              <span data-review-type="star" class="product-rating-star-halves product-rating-star-halves-10"></span>
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style src="../pages/css/product-list.css" scoped></style>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'productListPage',
    components: {
    },
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
    },
    methods: {
    }
  }
</script>
