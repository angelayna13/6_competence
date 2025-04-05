import { createStore } from 'vuex';

export default  createStore({
  state: {
    products: [
      { id: 1, name: 'Яблоко', price: 100 },
      { id: 2, name: 'Банан', price: 50 },
      { id: 3, name: 'Апельсин', price: 70 },
    ],
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      const index = state.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
  },
  getters: {
    cartItems: state => state.cart,
    totalAmount: state => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});
