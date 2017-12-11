<template>
  <div>
    <div class="columns">
      <div class="side-menu column is-2">
        <div id="leftNavContainer">
            <div>
                <h2>Brand</h2>
                <ul class="unordered-list">
                  <li v-for="brand in facetList.brandFacets">
                    <div class="a-checkbox">
                      <label>
                        <input type="checkbox" :id="brand.key" :value="brand.value" v-model="selectedFacetList.brands" @change="filterData">
                        <span>{{brand.value}}</span>
                      </label>
                    </div>
                  </li>
                </ul>
            </div>
            <div>
              <h2>Color</h2>
              <ul class="unordered-list">
                <li v-for="color in facetList.colorFacets">
                  <div class="a-checkbox">
                    <label>
                      <input type="checkbox" :id="color.key" :value="color.value" v-model="selectedFacetList.colors" @change="filterData">
                      <span>{{color.value}}</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
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
  import CustomCheckbox from '../components/Checkbox'
  export default {
    name: 'DashboardPage',
    components: {
      CustomCheckbox
    },
    data () {
      return {
       // brands: [],
       // colors: []
      }
    },
    created () {
      this.$store.dispatch('getProducts', {b: this.$route.query.b, c: this.$route.query.c})
    },
    computed: {
      ...mapGetters({
        productData: 'productData',
        facetList: 'getFacetList',
        selectedFacetList: 'getSelectedFacet'
      })
    },
    methods: {
      filterData: function (event) {
        this.$store.dispatch('getProducts', {b: this.selectedFacetList.brands, c: this.selectedFacetList.colors})
        if (this.selectedFacetList.brands.length !== 0 || this.selectedFacetList.colors.length !== 0) {
          this.$router.push({ path: 'product', query: {b: this.selectedFacetList.brands.join(';'), c: this.selectedFacetList.colors.join(';')} })
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
