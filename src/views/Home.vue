<template>
  <div
    class="xs:container-fluid md:container mx-auto bg-gray-400 dark:bg-gray-800"
  >
    <Navbar />

    <div class="flex justify-between p-5">
      <Search />
      <Filter />
    </div>

    <Countries />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Search from "@/components/Home/Search";
import Filter from "@/components/Home/Filter";
import Countries from "../components/Home/Countries.vue";
import { provide, ref } from "vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Search,
    Filter,
    Countries,
  },
  setup() {
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
