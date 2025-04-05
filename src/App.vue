<template>
  <div id="app">
    <ProductList />
    <Cart />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import Cart from './components/ShoppingCart.vue';

export default {
  components: {
    ProductList,
    Cart,
  },
};
</script>
