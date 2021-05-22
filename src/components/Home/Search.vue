<template>
  <span class="flex">
    <Icon :icon="iMagnify" :color="'black'" />
    <input type="text" v-model="search" placeholder="Search for a country" />
    <!-- {{ search }} -->
  </span>
</template>

<script>
import Icon from "@/components/Icon";
import { mdiMagnify } from "@mdi/js";
import { ref } from "vue";
export default {
  components: {
    Icon,
  },

  setup() {
    const iMagnify = mdiMagnify;

    const search = ref("");

    return { search, iMagnify };
  },
};
</script>
