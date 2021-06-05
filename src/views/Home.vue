<template>
  <div>
    <Navbar class="bg-gray-50 dark:bg-gray-700 shadow" />

    <div
      class="smSearch:block  md:flex md:justify-between p-5 xs:container-fluid md:container mx-auto"
    >
      <Search class="xss:mb-2 md:mb-0 shadow" />
      <Filter class="shadow" />
    </div>

    <Countries class="xs:container-fluid md:container mx-auto" />
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
