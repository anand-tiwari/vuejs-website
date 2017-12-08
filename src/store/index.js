import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const state = {
  users: [],
  products: []
}

const mutations = {
  setUsers: (state, value) => {
    state.users = value
  },
  setProducts: (state, value) => {
    state.products = value
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
  }
}

const getters = {
  users: (state) => {
    return state.users
  },
  productData: (state) => {
    return state.products
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
