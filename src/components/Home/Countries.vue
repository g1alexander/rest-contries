<template>
  <div
    class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"
  >
    <article
      v-for="(country, index) in countriesFilter"
      :key="index"
      class="bg-gray-50 dark:bg-gray-700 rounded-t-md rounded-b-md"
    >
      <Country :country="country" />
    </article>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
import { useApi } from "@/hooks/useApi";
import Country from "./Country";

export default {
  components: { Country },
  setup() {
    const countries = inject("countries");
    const countriesFilter = inject("countriesFilter");

    onMounted(() => {
      useApi().then((res) => {
        res = res.sort((a, b) => (a.population < b.population ? 1 : -1));
        countries.value = res;
        countriesFilter.value = res;
      });
    });

    return { countriesFilter };
  },
};
</script>
