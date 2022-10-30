<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <RouterView />
  <footer>Vumesi</footer>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  height: 100%;

  main {
    height: calc(100% - 80px);
  }
}
</style>

<style scoped lang="scss"></style>
