<template>
  <h1>{{alc? "Alcoholic" : "Non - Alcoholic"}} Cocktails</h1>
  <div class="flex-grid">
    <drinks />
  </div>
</template>

<script>
import Drinks from "./Drinks.vue";
export default {
  name: "DrinkList",
  components: {
    Drinks,
  },
  mounted() {
    this.alc = this.$route.params.alcoholic === "alcoholic";
  },
  data() {
    return {
      alc: Boolean,
    };
  },
};
</script>

<style scoped>
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
