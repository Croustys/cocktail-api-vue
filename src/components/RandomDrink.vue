<template>
  <div class="flex-grid">
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
    </div>
  </div>
  <button class="button button--greip" v-if="this.ready" @click="handleClick">
    <span><span>New Cocktail</span></span>
  </button>
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
<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  font-size: 18px;
}

@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
}

.button {
  pointer-events: auto;
  cursor: pointer;
  background: lightblue;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.button--greip {
  overflow: hidden;
  color: white;
  font-family: input-mono-narrow, monospace;
  font-weight: 500;
  padding: 1rem 2rem;
}

.button--greip span {
  display: block;
  position: relative;
}

.button--greip > span {
  overflow: hidden;
  mix-blend-mode: difference;
}

.button--greip:hover > span > span {
  animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
}

.button--greip::before {
  content: "";
  background: #000;
  width: 100%;
  height: 100%;
  transform-origin: 50% 100%;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  transition: clip-path 0.2s, -webkit-clip-path 0.2s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
}

.button--greip:hover::before {
  transition-duration: 0.3s;
  -webkit-clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
}
</style>
