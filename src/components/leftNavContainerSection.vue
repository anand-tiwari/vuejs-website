<template>
  <div id="leftNavContainer">
    <div class="filters">
      <h2 class="filter-title">Brand</h2>
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
    <div class="filters">
      <h2 class="filter-title">Color</h2>
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
</template>


<style src="../pages/css/left-nav-container.css" scoped></style>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'leftSidePage',
    data () {
      return {
      }
    },
    created () {
    },
    computed: {
      ...mapGetters({
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
