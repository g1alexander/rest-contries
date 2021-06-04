<template>
  <nav class="bg-green-400 flex justify-between items-center h-14 px-2">
    <h1 class="font-bold text-xl">Where in the world?</h1>

    <DarkMode />
  </nav>
</template>

<script>
import DarkMode from "./DarkMode.vue";
export default {
  name: "Navbar",
  components: {
    DarkMode,
  },
};
</script>

<style></style>
