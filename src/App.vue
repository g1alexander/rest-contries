<template>
  <router-view />
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      if (!localStorage.getItem("darkmode")) {
        if (
          (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches) === true
        ) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("darkmode", true);
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("darkmode", false);
        }
      }
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

#app {
  font-family: "Nunito Sans", sans-serif;
}
</style>
