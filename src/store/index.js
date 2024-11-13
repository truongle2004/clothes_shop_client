import { createStore } from 'vuex'
import product from '@/store/modules/product'
import cart from '@/store/modules/cart'

const store = createStore({
  modules: {
    product,
    cart
  }
})

export default store
