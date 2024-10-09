import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'greetings',
      component: () => import('../views/greetings.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/chat.vue')
    },
  ]
})

export default router
