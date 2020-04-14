import Vue from 'vue'
import * as firebase from 'firebase'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'



Vue.use(Router)

const router =  new Router({
  routes: [

    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {

  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next ('home')
  else next()
})

export default router