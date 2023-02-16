<template>
  <router-view />
</template>

<script>
import { provide, ref, onMounted } from "vue";
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

    const countries = ref([]);
    provide("countries", countries);

    const countriesFilter = ref([]);
    provide("countriesFilter", countriesFilter);

    const search = ref("");
    provide("search", search);

    const region = ref("");
    provide("region", region);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

#app {
  font-family: "Nunito Sans", sans-serif;
}
</style>
