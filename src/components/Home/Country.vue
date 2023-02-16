<template>
  <img class="w-full rounded-t-md" :src="country.flags.png" />

  <div class="px-5 pt-5 pb-12">
    <router-link :to="`/${url(country.name.common)}`">
      <h2 class="pb-2 font-bold text-lg">{{ country.name.common }}</h2>
    </router-link>
    <p>
      <span class="font-bold">Population:</span>
      {{ formatPopulation(country.population) }}
    </p>
    <p><span class="font-bold">Region:</span> {{ country.region }}</p>
    <p>
      <span class="font-bold">Capital:</span>
      {{ country.capital?.length > 0 ? country.capital[0] : country.capital }}
    </p>
  </div>
</template>

<script>
import { useActions } from "@/hooks/useActions";
export default {
  props: {
    country: Object,
  },
  setup() {
    const { formatPopulation } = useActions();

    const url = (name) => {
      name = name.split(" ").join("-");
      return name;
    };

    return { formatPopulation, url };
  },
};
</script>
