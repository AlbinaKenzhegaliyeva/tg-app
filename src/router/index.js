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
    {
      path: '/pre-final',
      name: 'pre-final',
      component: () => import('../views/pre-final.vue')
    },
    {
      path: '/finals/',
      name: 'final-overlay',
      component: () => import('../views/finals/final-overlay.vue')
    },
    {
      path: '/finals/final',
      name: 'final',
      component: () => import('../views/finals/final.vue')
    },
    {
      path: '/finals/leaderboard',
      name: 'leaderboard',
      component: () => import('../views/finals/leaderboard.vue')
    },
  ]
})

export default router
