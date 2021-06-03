<template>
  <select @click="filterRegion" name="region" v-model="region">
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
