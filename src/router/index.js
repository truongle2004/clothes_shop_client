import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import UserInfo from '@/components/Form/UserInfo/UserInfo.vue'
import AccountView from '@/views/AccountView.vue'
import AppBar from '@/components/AppBar.vue'
import ListProductsView from '@/views/ListProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppBar,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/login',
          name: 'login',
          component: LoginView
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView
        },
        {
          path: '/userInfo',
          name: 'userInfo',
          component: UserInfo
        },
        {
          path: '/account',
          name: 'account',
          component: AccountView
        },
        {
          path: '/list_products',
          name: 'products',
          component: ListProductsView
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
