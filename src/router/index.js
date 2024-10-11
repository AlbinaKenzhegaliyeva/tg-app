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
      path: '/chat/obx',
      name: 'obx',
      component: () => import('../views/chat/obx.vue')
    },
    {
      path: '/chat/sort',
      name: 'sort',
      component: () => import('../views/chat/sort.vue')
    },
    {
      path: '/chat/routes',
      name: 'routes',
      component: () => import('../views/chat/routes.vue')
    },
    {
      path: '/chat/quiz',
      name: 'quiz',
      component: () => import('../views/chat/quiz.vue')
    },
    {
      path: '/door',
      name: 'door',
      component: () => import('../views/door.vue')
    },
  ]
})

export default router
