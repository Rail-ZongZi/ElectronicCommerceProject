import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  // linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
