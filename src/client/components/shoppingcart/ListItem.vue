<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br />
      <button :disabled="!product.inventory" @click="addProductToCart(product)">Add to cart</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    products: Array,
    addProductToCart: Function
  }
};
</script>