<template>
  <div class="container">
    <div class="header">
      <router-link class="header-link" to="/">Home</router-link>
      <router-link class="header-link" to="/shop">Shoping</router-link>
      <router-link class="header-link" to="/counter">Counter</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Root"
};
</script>