import Root from "../layout/Root.vue";

const routes = [
  {
    path: "/",
    component: Root,
    children: [
      { path: "/", component: () => import("../pages/index.vue") },
      { path: "/shop", component: () => import("../pages/Shopingcart/index.vue") },
      { path: "/counter", component: () => import("../pages/Counter/index.vue") }
    ]
  }
];

export default routes;
