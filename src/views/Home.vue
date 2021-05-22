<template>
  <div class="xs:container-fluid md:container mx-auto">
    <Navbar />

    <div class="flex justify-between p-5">
      <Search />
      <Filter />
    </div>

    <Contries />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Search from "@/components/Home/Search";
import Filter from "@/components/Home/Filter";
import Contries from "../components/Home/Contries.vue";
import { provide, ref } from "vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Search,
    Filter,
    Contries,
  },
  setup() {
    const contries = ref([]);
    provide("contries", contries);

    const contriesFilter = ref([]);
    provide("contriesFilter", contriesFilter);

    console.log(contries.value);
  },
};
</script>
