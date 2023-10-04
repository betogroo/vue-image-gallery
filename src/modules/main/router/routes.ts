// Composables
import { CustomRouteRecordRaw } from 'vue-router'

const routes: CustomRouteRecordRaw[] = [
  {
    path: '/:term?',
    component: () => import('../views/HomeView.vue'),
    name: 'HomeView',
    props: (route) => ({
      term: route.params.term || 'curated',
      page:
        route.query.page && route.query.page !== undefined
          ? +route.query.page
          : 1,
    }),
    meta: {
      title: 'Home',
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue'),
    name: 'AboutView',
    meta: {
      title: 'Sobre',
      requiresAuth: false,
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 - Página não encontrada',
      requiresAuth: false,
    },
  },
]

export default routes
