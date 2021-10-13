import Vue from 'vue'
import VueRouter from 'vue-router'

// 일괄 로딩
import Daily from '../views/Daily.vue'
// import Days from '../views/Days.vue'

// 지연 로딩
// const Daily = () => import('../views/Daily.vue')
const Days = () => import('../views/Days.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Daily',
    component: Daily
  },
  {
    path: '/5days',
    name: 'Days',
    component: Days
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
