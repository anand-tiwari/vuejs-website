import Vue from 'vue'
import VueResource from 'vue-resource'

import config from '@/config'

Vue.use(VueResource)

export default {
  getUsers (cb) {
    setTimeout(function () {
      Vue.http.get(config.api.users).then((res) => {
        cb(res)
      }, () => {
        // TODO
      })
    }, 1000)
  },
  getProducts (cb) {
    setTimeout(function () {
      Vue.http.get(config.api.products).then((res) => {
        cb(res)
      }, () => {
        // TODO
      })
    }, 1000)
  }
}
