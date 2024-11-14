const state = {
  listCartItem: [],
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
    if (state.totalPrice > 0) {
      state.totalPrice -= Number(product.price * product.quantity)
    }
  },
  setListCartItem(state, product) {
    console.log(product)
    state.listCartItem = product
  }
}

const actions = {
  AddCartItem({ commit }, cartItem) {
    commit('setSelectedCartItem', cartItem)
  },
  RemoveCartItem({ commit }, cartItem) {
    commit('removeCartItemSelected', cartItem)
  },
  SetListCartItem({ commit }, listCartItem) {
    commit('setListCartItem', listCartItem)
  }
}

const getters = {
  selectedCartItem: (state) => state.selectedProduct,
  totalPrice: (state) => state.totalPrice,
  listCartItem: (state) => state.listCartItem
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
