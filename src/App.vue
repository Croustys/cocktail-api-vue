<template>
  <div>
    <button v-if="this.ready" @click="handleClick">Get New Cocktail</button>
    SZIA LAJOS
    <router-view></router-view>
  </div>
</template>

<script>
/* @todo make landing page */
/* @todo create new components & pages */
export default {
  name: "App",
  components: {
    /* RandomDrink, */
    /* Test, */
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
