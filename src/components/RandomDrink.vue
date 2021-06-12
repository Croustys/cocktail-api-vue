<template>
  <div>
    <Card
      :type="this.type"
      :category="this.category"
      :name="this.name"
      :alternative="this.alternative"
      :imageLink="this.imageLink"
      :glass="this.glass"
      :ingredients="this.Ingredients"
      :instructions="this.instructions"
    />
    <button v-if="this.ready" @click="handleClick">Get New Cocktail</button>
  </div>
</template>

<script>
import fetchRandomDrink from "../api";
import Card from "./Card.vue";
export default {
  name: "RandomDrink",
  components: { Card },
  methods: {
    async fetch() {
      const drinkData = await fetchRandomDrink();
      /* console.log(drinkData); */

      const unfilteredDrinkData = [...Object.values(drinkData)];

      const ingredientArray = unfilteredDrinkData.filter(
        (ingr, index) =>
          index > 16 && index < 32 && ingr !== null && ingr !== ""
      );
      const measurementArray = unfilteredDrinkData.filter(
        (meas, index) =>
          index > 31 && index < 48 && meas !== null && meas !== ""
      );

      this.Ingredients = ingredientArray.map((ing, i) => {
        const mes = measurementArray[i];
        return { ing, mes };
      });

      this.type = drinkData.strAlcoholic;
      this.category = drinkData.strCategory;
      this.name = drinkData.strDrink;
      this.alternative = drinkData.strDrinkAlternate;
      this.imageLink = drinkData.strDrinkThumb;
      this.glass = drinkData.strGlass;
      this.instructions = drinkData.strInstructions;
    },
    handleClick() {
      this.fetch();
    },
  },
  data() {
    return {
      data: Object,
      Ingredients: Array,
      type: String,
      category: String,
      name: String,
      alternative: String | null,
      imageLink: String,
      glass: String,
      instructions: String,
      ready: Boolean,
    };
  },
  created() {
    this.fetch();
  },
  computed() {
    this.ready = true;
  },
};
</script>

<style lang="scss" scoped></style>
