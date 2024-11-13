const state = {
  selectedItems: [],
  totalPrice: 0
}

const mutations = {
  setSelectedCartItem(state, product) {
    state.selectedItems.push(product)
    state.totalPrice += Number(product.price * product.quantity)
  },
  removeCartItemSelected(state, product) {
    state.selectedProduct = state.selectedItems.filter((item) => item.id !== product.productId)
    state.totalPrice -= Number(product.price * product.quantity)
  }
}

const actions = {
  AddCartItem({ commit }, cartItem) {
    commit('setSelectedCartItem', cartItem)
  },
  RemoveCartItem({ commit }, cartItem) {
    commit('removeCartItemSelected', cartItem)
  }
}

const getters = {
  selectedCartItem: (state) => state.selectedProduct,
  totalPrice: (state) => state.totalPrice
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
