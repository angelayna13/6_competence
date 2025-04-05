<template>
  <div class="productlist">
    <h2>Список продуктов</h2>
    <div v-for="product in products" :key="product.id">
      <div class="content">
        <h3>{{ product.name }} - {{ product.price }}₽</h3>
        <button @click="addToCart(product)">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['products']),
  },
  methods: {
    ...mapActions(['addToCart']),
  },
};
</script>
