import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

// let user = localStorage.getItem('user')
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    localStorage.removeItem('user')
    next()
  } else {
    next()
  }
})
export default router
