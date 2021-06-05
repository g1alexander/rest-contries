<template>
  <div>
    <Navbar class="bg-gray-50 dark:bg-gray-700 shadow" />

    <div class="smSearch:block p-5 xs:container-fluid md:container mx-auto">
      <Arrow />
      <Detail :country="country" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Arrow from "../components/Country/Arrow.vue";
import Detail from "../components/Country/Detail.vue";

export default {
  components: {
    Navbar,
    Arrow,
    Detail,
  },
  props: {
    country: String,
  },
};
</script>
