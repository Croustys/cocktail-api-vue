import { createRouter, createWebHistory } from "vue-router";
import RandomDrink from "../components/RandomDrink.vue";
import DrinkList from "../components/DrinkList.vue";
import Test from "../components/Test.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Test,
  },
  {
    path: "/random-drink",
    name: "RandomDrink",
    component: RandomDrink,
  },
  {
    path: "/alldrinks/:alcoholic",
    name: "AlcoholicDrinks",
    component: DrinkList,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
