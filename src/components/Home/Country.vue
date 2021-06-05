<template>
  <img class="w-full rounded-t-md" :src="country.flag" />

  <div class="px-5 pt-5 pb-12">
    <router-link :to="`/${url(country.name)}`">
      <h2 class="pb-2 font-bold text-lg">{{ country.name }}</h2>
    </router-link>
    <p>
      <span class="font-bold">Population:</span>
      {{ formatPopulation(country.population) }}
    </p>
    <p><span class="font-bold">Region:</span> {{ country.region }}</p>
    <p><span class="font-bold">Capital:</span> {{ country.capital }}</p>
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
