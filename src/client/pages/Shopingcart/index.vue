<template>
  <div id="apps">
    <h1>Shopping Cart Example</h1>
    <hr />
    <h2>Products</h2>
    <ProductList title="Product List" />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import ShoppingCart from "./ShoppingCart.vue";

export default {
  components: { ProductList, ShoppingCart }
};
</script>
