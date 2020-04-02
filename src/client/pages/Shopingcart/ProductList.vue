<template>
  <div>
    <h3>{{title}}</h3>
    <ListItem v-bind:products="products" :addProductToCart="addProductToCart" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ListItem from "../../components/shoppingcart/ListItem.vue";
export default {
  props: ["title"],
  computed: mapState({
    products: state => {
      return state.products.all;
    }
  }),
  methods: mapActions("cart", ["addProductToCart"]),
  created() {
    this.$store.dispatch("products/getAllProducts");
  },
  components: { ListItem }
};
</script>
