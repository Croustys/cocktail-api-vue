import { createRouter, createWebHistory } from "vue-router";
import RandomDrink from "../components/RandomDrink.vue";
import Test from "../components/Test.vue";

const routes = [
  {
    path: "/rnd",
    name: "RandomDrink",
    component: RandomDrink,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
