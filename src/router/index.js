import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import Pending from '@/pages/pending'
import Pass from '@/pages/Pass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },{
      path: '/Index',
      component: Index
    },{
      path: '/Pending',
      component: Pending
    },{
      path: '/Pass',
      component: Pass
    }
  ]
})
