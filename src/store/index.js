import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
// import firebase from 'firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'

Vue.use(Vuex)

const facetList = {
  brandFacets: [
    {
      'key': 'lg',
      'value': 'lg'
    }, {
      'key': 'samsung',
      'value': 'samsung'
    }
  ],
  colorFacets: [
    {
      'key': 'red',
      'value': 'red'
    }, {
      'key': 'blue',
      'value': 'blue'
    }
  ]
}

const selectedFacetList = {
  brands: [],
  colors: []
}

const state = {
  users: [],
  products: [],
  productDetail: [],
  facetList: facetList,
  selectedFacetList: selectedFacetList,
  loaderState: false,
  books: []
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
  },
  setSelectedFacet: (state, value) => {
    // state.selectedFacetList.brands = []
    // state.selectedFacetList.colors = []
    if (value['b'] !== undefined) {
      let facet = value.b
      if (!Array.isArray(value.b)) {
        facet = value.b.split(';')
      }
      state.selectedFacetList.brands = facet
    }
    if (value['c'] !== undefined) {
      let facet = value.c
      if (!Array.isArray(value.c)) {
        facet = value.c.split(';')
      }
      state.selectedFacetList.colors = facet
    }
  },
  setLoaderState: (state, payload) => {
    state.loaderState = payload
  },
  ...firebaseMutations
}

const actions = {
  getUsers: ({commit}) => {
    api.getUsers((response) => {
      commit('setUsers', response.body.data)
    })
  },
  getProducts: ({commit}, param) => {
    commit('setLoaderState', true)
    api.getProducts((resources) => {
      let data = resources.body.data
      if (param.b !== undefined && Object.keys(param.b).length !== 0) {
        data = data.filter(
          (u) => param.b.indexOf(u.brand) >= 0
        )
      }
      commit('setLoaderState', false)
      commit('setProducts', data)
      commit('setSelectedFacet', param)
    })
  },
  getProductById: ({commit}, param) => {
    api.getProducts((resources) => {
      commit('setProductDetail', resources.body.data.filter(
        (u) => u.id === param.id
      ))
    })
  },
  loaderShowAction: ({ commit }, payload) => {
    commit('setLoaderState', payload)
  },
  setTodosRef: firebaseAction(
    ({
       bindFirebaseRef
      }, ref) => {
      bindFirebaseRef('books', ref)
    })
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
  },
  getFacetList: (state) => {
    return state.facetList
  },
  getSelectedFacet: (state) => {
    return state.selectedFacetList
  },
  getLoaderState: (state) => {
    return state.loaderState
  },
  getBooks: (state) => {
    return state.books
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
