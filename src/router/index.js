import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import Robots from "@/views/Robots.vue";
import Configure from "@/views/Configure.vue";
import Start from "@/views/Start.vue";

const routes = [
  { path: "/",
    component: Home,
    name: 'home'
  },
  { path: "/robots",
    name: 'robots',
    component: Robots,
      props: (route) => ({
        robot: route.params.robot
      })
  },
  { path: "/configure",
    name: 'configure',
    component: Configure,
      props: (route) => ({
        robot: route.params.robot,
        selectable: route.params.selectable
      })
  },
  { path: "/start",
    name: 'start',
    component: Start,
      props: (route) => ({
        level: route.params.level,
        robot: route.params.robot
      })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
