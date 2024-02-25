import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Robots from "@/views/Robots.vue";
import Configure from "@/views/Configure.vue";
import Start from "@/views/Start.vue";

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
  {
    path: "/start",
    name: "Start",
    component: Start,
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: '/web_new/',
  routes,
});

export default router;
