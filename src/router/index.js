import { createRouter, createWebHashHistory } from 'vue-router'
import PostsView from '@/views/PostsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PostsView
  },
  {
    path: '/addPost',
    name: 'addPost',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
