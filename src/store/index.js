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
  getProducts: ({commit}, param) => {
    api.getProducts((resources) => {
      let data = resources.body.data
      if (param.q !== undefined && Object.keys(param.q).length !== 0) {
        data = data.filter(
          (u) => param.q.indexOf(u.brand) >= 0
        )
      }
      commit('setProducts', data)
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
