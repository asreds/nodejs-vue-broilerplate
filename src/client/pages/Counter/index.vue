<template>
  <div class="container">
    Counter {{count}}
    <button @click="increment()">Tambah</button>
    <button :disabled="count === 0" @click="decreiment()">Kurangi</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "counter",
  computed: mapState({
    count: state => {
      return state.counter.count;
    }
  }),
  methods: mapActions("counter", ["increment", "decreiment"])
};
</script>