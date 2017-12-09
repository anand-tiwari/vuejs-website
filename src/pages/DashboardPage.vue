<template>
  <div>
    <h2>Dashboard</h2>
    <div class="columns">
      <div class="side-menu column is-2">
        <h2>side menu</h2>
      </div>
      <div class="content-menu column is-10">
          <div class="columns">
            <div v-for="item in productData" class="item-container column is-2">
              <router-link :to="{ name: 'Productdetail' , params:{id:item.id}}">
              <div class="product-banner">
                <meta itemprop="image" content="src/assets/lazy-load.svg">
                <img class="lazyloaded" alt="Oberlo app banner" data-src="src/assets/phone.jpg"
                     src="src/assets/phone.jpg" width="160" height="160">
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
                <!--<p class="product-description" itemprop="description">
                  Easy dropshipping for hundreds of products to your Shopify store and never worry about packaging or shipping.&amp;#13;
                </p>-->
              </div>
              </router-link>
            </div>
          </div>
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
  }
  .content-menu{
  }
  .item-container{
    padding: 1px;
    margin: 3px 5px;
    transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
    position: relative;
  }
  .product-banner{
    width: 100%;
  }
</style>
