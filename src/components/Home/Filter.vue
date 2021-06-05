<template>
  <select
    class="bg-gray-50 dark:bg-gray-700 pl-2 py-2 pr-28 cursor-pointer focus:outline-none border-gray-50 dark:border-gray-700"
    @click="filterRegion"
    name="region"
    v-model="region"
  >
    <option value="">All</option>
    <option value="Africa">Africa</option>
    <option value="Americas">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
</template>

<script>
import { inject } from "vue";
import { useActions } from "@/hooks/useActions";

export default {
  setup() {
    const region = inject("region");

    const { filterRegion } = useActions();

    filterRegion();

    return { region, filterRegion };
  },
};
</script>
