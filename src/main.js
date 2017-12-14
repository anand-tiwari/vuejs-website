// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import store from './store'
/* import firebase from 'firebase'
import { config } from './firebase-config' */

require('./assets/sass/main.scss')
require('font-awesome/css/font-awesome.css')

require('@vue-mock')

Vue.config.productionTip = false
Vue.use(VueFire)

// Vue.prototype.$firebase = firebase.initializeApp(config)
// firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
