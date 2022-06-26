import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')

  },
  {
    path: '/judge',
    name: 'Judge',
    component: () => import('@/views/home/Judge.vue')
  },
  {
    path: '/flowquery',
    component: () => import('@/views/home/FlowQuery.vue'),
    children: [{
      path: '/flowquery/flowqueryPopup',
      component: () => import('@/views/home/components/FlowQueryPopup.vue')
    }]
  },
  {
    path: '/flowquerymap',
    component: () => import('@/views/home/FlowQueryMap.vue')
  },
  {
    path: '/category',
    component: () => import('@/views/home/Category.vue')
  }, {
    path: '/contact',
    component: () => import('@/views/home/Contact.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/User.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
