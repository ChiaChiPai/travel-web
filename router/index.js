import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () => import("@/views/HelloWorld.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
