import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/post-details',
    name: 'PostDetails',
    component: () => import('../views/PostDetails.vue')
  },
  {
    path: '/create-new-post',
    name: 'CreateNewPost',
    component: () => import('../views/CreateNewPost.vue'),
    beforeEnter: (to, from, next) => {
      if(store.getters.isLoggedIn){
        next()
      }else next({name:'Login'})
    }
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next({name:'Home'})
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
