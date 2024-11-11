import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import store from '@/store'
import 'vue3-toastify/dist/index.css'
import Vue3Toastify from 'vue3-toastify'

const app = createApp(App)

app.use(Vue3Toastify, {
  autoClose: 3000
})

app.use(store)

app.use(router)

app.use(VueQueryPlugin)

app.mount('#app')
