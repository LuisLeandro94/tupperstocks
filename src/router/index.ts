import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductPage.vue'),
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: () => import('../views/ProductDetailPage.vue'),
    },
  ],
})

export default router
