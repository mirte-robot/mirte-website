import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Robots from "@/views/Robots.vue";
import Configure from "@/views/Configure.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/robots",
    name: "Robots",
    component: Robots,
  },
  {
    path: "/configure",
    name: "Configure",
    component: Configure,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
