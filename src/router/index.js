import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'greetings',
      component: () => import('../views/greetings.vue')
    },
  ]
})

export default router
