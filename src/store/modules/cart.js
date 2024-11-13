const state = {
  selectedProduct: []
}

const mutations = {
  setSelectedCartItem(state, product) {
    state.selectedProduct = product
  },
  removeCartItemSelected(state, id) {
    state.selectedProduct = state.selectedProduct.filter((item) => item.id !== id)
  }
}

const actions = {
  AddCartItem({ commit }, cartItem) {
    commit('setSelectedCartItem', cartItem)
  },
  RemoveCartItem({ commit }, cartItemId) {
    commit('removeCartItemSelected', cartItemId)
  }
}

const getters = {
  selectedCartItem: (state) => state.selectedProduct,
  getTotalPrice: (state) => state.selectedProduct.reduce((total, item) => total + item.price, 0)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
