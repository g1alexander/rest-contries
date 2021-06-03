<template>
  <img class="w-full rounded-t-md" :src="country.flag" />

  <div class="px-5 pt-5 pb-12">
    <router-link :to="`/${country.name}`">
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
export default {
  props: {
    country: Object,
  },
  setup() {
    const formatPopulation = (num) => {
      return new Intl.NumberFormat("de-DE").format(num);
    };

    return { formatPopulation };
  },
};
</script>
