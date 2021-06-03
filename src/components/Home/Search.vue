<template>
  <span class="flex">
    <Icon :icon="iMagnify" :color="'black'" />
    <form @keyup="searchForm">
      <input
        type="text"
        v-model.trim="search"
        placeholder="Search for a country"
      />
    </form>
  </span>
</template>

<script>
import Icon from "@/components/Icon";
import { mdiMagnify } from "@mdi/js";
import { inject } from "vue";
import { useActions } from "@/hooks/useActions";
export default {
  components: {
    Icon,
  },

  setup() {
    const iMagnify = mdiMagnify;
    const search = inject("search");

    const { searchForm } = useActions();

    searchForm();

    return { search, iMagnify, searchForm };
  },
};
</script>
