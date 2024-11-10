import { productApis } from '@/apis/productApi'

const state = {
  products: [],
  selectedProduct: null
}

const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setSelectedProduct(state, product) {
    console.log(product)
    state.selectedProduct = product
  }
}

const actions = {
  async fetchProducts({ commit }) {
    try {
      const data = await productApis.getAllProductApi()
      commit('setProducts', data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  },
  async fetchProductById({ commit }, productId) {
    try {
      const product = await productApis.getProductById(productId) // Call the API for a single product
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
