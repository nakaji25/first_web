import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Profile from "../views/Profile.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
