<template>
  <div>
    <router-link to="/random-drink">Check out a random Cocktail!</router-link>
    <router-link to="/alldrinks/:alcoholic"
      >List all alcoholic Cocktails!</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    type: String,
  },
  data() {
    return { ready: false };
  },
  mounted() {
    this.ready = true;
  },
  methods: {
    isReady() {
      return typeof this.type === "string";
    },
  },
};
</script>

<style lang="scss" scoped></style>
