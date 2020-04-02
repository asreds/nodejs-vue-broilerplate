import "babel-polyfill";
import Vue from "vue";
import store from "./store";
import { currency } from "./currency";
import VueRouter from "vue-router";
import routes from "./routes/index"

Vue.filter("currency", currency);
Vue.use(VueRouter);

// initial router
export const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

const app = new Vue({
  router,
  store,
  template: "<router-view />"
});

app.$mount("#app");
