import Vue from 'vue'
import VueResource from 'vue-resource'

import config from '@/config'

Vue.use(VueResource)

export default {
  getUsers (cb) {
    Vue.http.get(config.api.users).then((res) => {
      cb(res)
    }, () => {
      // TODO
    })
  },
  getProducts (cb) {
    Vue.http.get(config.api.products).then((res) => {
      cb(res)
    }, () => {
      // TODO
    })
  }
}
