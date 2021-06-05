<template>
  <div>
    <nav
      class="xs:container-fluid md:container mx-auto flex justify-between items-center h-14 px-2"
    >
      <h1 class="font-bold text-xl">Where in the world?</h1>

      <DarkMode />
    </nav>
  </div>
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
