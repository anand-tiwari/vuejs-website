import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import DashboardPage from '@/pages/DashboardPage'
import UserPage from '@/pages/UserPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage
    },
    {
      path: '/dashboard/users',
      name: 'User',
      component: UserPage
    }
  ],
  mode: 'history'
})
