<template>
  <div>
    <div class="columns">
      <div class="side-menu column is-2">
        <div id="leftNavContainer">
          <h2>Brand</h2>
          <ul class="unordered-list">
            <li>
              <span class="a-list-item">
                <span class="a-declarative">
                  <div class="a-checkbox s-ref-link-cursor a-spacing-none">
                    <label>
                      <input type="checkbox" value="lg" v-model="brands"
                             v-on:change="filterData">
                      <span class="a-label a-checkbox-label">
                        <span class="a-size-small a-color-base s-ref-text-link s-ref-link-cursor">LG</span>
                      </span>
                    </label>
                  </div>
                </span>
              </span>
            </li>
            <li>
              <!--<router-link :to="{ path: 'product', query:{b:'samsung'} }">-->
              <span class="a-list-item">
                <span class="a-declarative">
                  <div class="a-checkbox s-ref-link-cursor a-spacing-none">
                    <label>
                      <input type="checkbox" value="samsung" v-model="brands"
                             v-on:change="filterData">
                      <span class="a-label a-checkbox-label">
                        <span class="a-size-small a-color-base s-ref-text-link s-ref-link-cursor">Samsung</span>
                      </span>
                    </label>
                  </div>
                </span>
              </span>
              <!--</router-link>-->
            </li>
          </ul>
        </div>
      </div>
      <div class="content-menu column is-10">
        <div class="container is-fluid">
          <div class="columns is-multiline">
            <div v-for="item in productData" class="item-container column is-2">
              <router-link :to="{ name: 'Productdetail' , params:{id:item.id}}">
              <div class="product-banner">
                <meta itemprop="image" content="src/assets/lazy-load.svg">
                <img class="lazyloaded" alt="Oberlo app banner" data-src="src/assets/phone.jpg"
                     src="src/assets/phone.jpg" width="160" height="160">
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
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'DashboardPage',
    data () {
      return {
        brands: []
      }
    },
    created () {
      this.$store.dispatch('getProducts', {q: this.$route.query.b})
    },
    computed: {
      ...mapGetters(['productData'])
    },
    methods: {
      filterData: function (event) {
        this.$store.dispatch('getProducts', {q: this.brands})
        if (this.brands.length !== 0) {
          this.$router.push({path: 'product', query: {b: this.brands.join(';')}})
        } else {
          this.$router.push({path: 'product'})
        }
      }
    }
  }
</script>
<style>
  .side-menu{
  }
  .content-menu{
  }
  .item-container{
    padding: 5px;
    margin: 6px 17px;
    transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
    position: relative;
  }
  .product-banner{
    width: 100%;
  }
  .product-body{
    text-align: center;
  }
  .unordered-list{
    margin-left: 0;
    color: #111;
  }
  a{
    color: black;
  }
</style>
