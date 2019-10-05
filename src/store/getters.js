export default {
  cartList(state) {
    return state.cartList
  },
  cartCount(state, getters) {
    return state.cartList.length
  }
}