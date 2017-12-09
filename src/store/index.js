import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const state = {
  users: [],
  products: [],
  productId: undefined
}

const mutations = {
  setUsers: (state, value) => {
    state.users = value
  },
  setProducts: (state, value) => {
    state.products = value
  },
  updateProductId: (state, value) => {
    state.productId = value.toString()
  }
}

const actions = {
  getUsers: ({commit}) => {
    api.getUsers((response) => {
      commit('setUsers', response.body.data)
    })
  },
  getProducts: ({commit}) => {
    api.getProducts((resources) => {
      commit('setProducts', resources.body.data)
    })
  },
  updateProductId: ({commit}) => {
    commit('updateProductId', 1)
  }
}

const getters = {
  users: (state) => {
    return state.users
  },
  productData: (state) => {
    return state.products
  },
  getProductDescriptions: (state) => {
    let productDetail = state.products.filter(
      (u) => u.id === state.productId
    )
    return productDetail[0]
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
