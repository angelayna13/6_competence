<template>
  <div class="shoppingcart">
    <h2>Корзина</h2>
    <div v-if="cartItems.length === 0">Корзина пуста.</div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id">
      <div class="content">
        <h3>{{ item.name }} - {{ item.price }}₽ x {{ item.quantity }}</h3>
        <button @click="removeFromCart(item.id)">Удалить</button>
      </div>
      </div>
      <h3 class="result">Итого: {{ totalAmount }}₽</h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartItems', 'totalAmount']),
  },
  methods: {
    ...mapActions(['removeFromCart']),
  },
};
</script>
