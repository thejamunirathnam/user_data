import Vue from 'vue'
import Router from 'vue-router'
import RegisterForm from '@/components/RegisterForm'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/RegisterForm',
      name: 'RegisterForm',
      component: RegisterForm
    }
  ]
})
