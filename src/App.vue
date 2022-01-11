<template>
  <div id="app">
    {{ $t("APP.TITLE") }}
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from "@/components/main/Main.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "main-page": MainPage,
  },
};
</script>

<style lang="scss">
</style>
