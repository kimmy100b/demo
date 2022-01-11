import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/main/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'main',
    components: Main
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
