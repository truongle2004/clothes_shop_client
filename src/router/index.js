import NavBar from '@/components/NavBar.vue'
import UserInfo from '@/components/Form/UserInfo/UserInfo.vue'
import AccountView from '@/views/AccountView.vue'
import CartView from '@/views/CartView.vue'
import HomeView from '@/views/HomeView.vue'
import ListProductsView from '@/views/ListProductsView.vue'
import LoginView from '@/views/LoginView.vue'
import MyDetailView from '@/views/MyDetailView.vue'
import OrderView from '@/views/OrderView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: NavBar,
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
          path: '/products',
          name: 'products',
          component: ListProductsView
        },
        {
          path: '/product',
          name: 'product_detail',
          component: ProductDetailView
        },
        {
          path: '/cart',
          name: 'cart',
          component: CartView
        },
        {
          path: '/account',
          name: 'account',
          component: AccountView,
          children: [
            {
              path: 'order',
              name: 'order',
              component: OrderView
            },
            {
              path: 'my-details',
              name: 'my_details',
              component: MyDetailView
            }
          ]
        }
      ]
    }
  ]
})

export default router
