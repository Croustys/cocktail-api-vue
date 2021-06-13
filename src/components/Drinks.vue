<template>
  <div v-for="drink in allDrinks" :key="drink.idDrink">
    <Card
      :drinkId="drink.idDrink"
      :imageLink="drink.strDrinkThumb"
      :name="drink.strDrink"
    />
  </div>
</template>

<script>
import { fetchAllDrinks } from "../api";
import Card from "./Card.vue";
export default {
  name: "Drinks",
  components: {
    Card,
  },
  props: {
    alcoholic: Boolean,
  },
  async mounted() {
    this.allDrinks = await fetchAllDrinks(this.parseUrlParam() === "alcoholic");
    console.log(this.parseUrlParam());
  },
  methods: {
    parseUrlParam() {
      return this.$route.params.alcoholic;
    },
  },
  data() {
    return { allDrinks: [] };
  },
};
</script>

<style scoped></style>
