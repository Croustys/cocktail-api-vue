<template>
  <div v-if="this.ready">
    <div class="type">{{ type }}</div>
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
