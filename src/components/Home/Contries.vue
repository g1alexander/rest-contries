<template>
  <div
    class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"
  >
    <article
      v-for="(country, index) in contries"
      :key="index"
      class="bg-green-400 rounded-t-md rounded-b-md"
    >
      <img class="w-full rounded-t-md" :src="country.flag" />

      <div class="px-5 pt-5 pb-12">
        <router-link :to="`/${country.name}`">
          <h2 class="pb-2 font-bold text-lg">{{ country.name }}</h2>
        </router-link>
        <p>
          <span class="font-bold">Population:</span> {{ country.population }}
        </p>
        <p><span class="font-bold">Region:</span> {{ country.region }}</p>
        <p><span class="font-bold">Capital:</span> {{ country.capital }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
import { useApi } from "@/hooks/useApi.js";
export default {
  setup() {
    const contries = inject("contries");

    onMounted(() => {
      useApi().then((res) => (contries.value = res));
    });

    return { contries };
  },
};
</script>
