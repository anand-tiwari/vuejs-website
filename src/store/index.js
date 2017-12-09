import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const state = {
  users: [],
  products: [],
  productDetail: []
}

const mutations = {
  setUsers: (state, value) => {
    state.users = value
  },
  setProducts: (state, value) => {
    state.products = value
  },
  setProductDetail: (state, value) => {
    state.productDetail = value
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
  getProductById: ({commit}, param) => {
    api.getProducts((resources) => {
      commit('setProductDetail', resources.body.data.filter(
        (u) => u.id === param.id
      ))
    })
  }
}

const getters = {
  users: (state) => {
    return state.users
  },
  productData: (state) => {
    return state.products
  },
  getProductDetail: (state) => {
    return state.productDetail
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
