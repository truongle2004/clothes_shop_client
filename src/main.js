import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import store from '@/store'

const app = createApp(App)

app.use(store)

app.use(router)

app.use(VueQueryPlugin)

app.mount('#app')
