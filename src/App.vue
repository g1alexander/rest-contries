<template>
  <router-view
    class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
  />
</template>

<script>
//TODO: bug en el manejo del fondo (no se muestra en el 100% de la pantalla cuando filtra)
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
