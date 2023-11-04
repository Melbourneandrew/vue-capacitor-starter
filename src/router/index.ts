import { createRouter, createWebHistory } from "vue-router";
import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
const routes = [
  {
    path: "/",
    component: Page1,
  },
  {
    path: "/1",
    component: Page1,
  },
  {
    path: "/2",
    component: Page2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
