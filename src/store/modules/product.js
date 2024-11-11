import { productApis } from '@/apis/productApi'

const state = {
  selectedProduct: null
}

const mutations = {
  setSelectedProduct(state, product) {
    console.log(product)
    state.selectedProduct = product
  }
}

const actions = {
  async fetchProductById({ commit }, productId) {
    try {
      const product = await productApis.getProductById(productId)
      commit('setSelectedProduct', product)
    } catch (error) {
      console.error('Error fetching product by ID:', error)
    }
  }
}

const getters = {
  products: (state) => state.products,
  selectedProduct: (state) => state.selectedProduct
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
