import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import DashboardPage from '@/pages/DashboardPage'
import ProductDetail from '@/pages/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/product',
      name: 'Product',
      component: DashboardPage
    },
    {
      path: '/product/:id',
      name: 'Productdetail',
      component: ProductDetail
    }
  ],
  mode: 'history'
})
