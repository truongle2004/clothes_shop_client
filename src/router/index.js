import { toastifyError } from '@/utils/toastify'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/NavBar.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/LoginView.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/RegisterView.vue')
        },
        {
          path: '/userInfo',
          name: 'userInfo',
          component: () => import('@/components/Form/UserInfo/UserInfo.vue')
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('@/views/ListProductsView.vue')
        },
        {
          path: '/product/:id/:slug',
          name: 'product_detail',
          component: () => import('@/views/ProductDetailView.vue'),
          props: true
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('@/views/CartView.vue')
        },
        {
          path: '/admin',
          name: 'admin',
          component: () => import('@/views/AdminView.vue')
        },
        {
          path: '/account',
          name: 'account',
          component: () => import('@/views/AccountView.vue'),
          children: [
            {
              path: 'order',
              name: 'order',
              component: () => import('@/views/OrderView.vue')
            },
            {
              path: 'my-details',
              name: 'my_details',
              component: () => import('@/views/MyDetailView.vue')
            }
          ]
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken')
  const protectedRoutes = ['account', 'order', 'my_details', 'cart']

  if (!isAuthenticated && protectedRoutes.includes(to.name)) {
    toastifyError('You need to login first')
    return next({ name: 'login' })
  }

  next()
})

export default router
