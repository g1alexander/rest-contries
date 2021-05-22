<template>
  <select name="region" v-model="region">
    <option hidden value="Filter by Region">Filter by Region</option>
    <option value="">All</option>
    <option value="Africa">Africa</option>
    <option value="Americas">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const region = ref("Filter by Region");

    return { region };
  },
};
</script>

<style></style>
