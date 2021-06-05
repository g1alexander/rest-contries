<template>
  <span class="flex bg-gray-50 dark:bg-gray-700 pl-4 pr-1  py-2 ">
    <Icon :icon="iMagnify" :color="'gray'" />
    <form @keyup="searchForm">
      <input
        type="text"
        class="mt-1 smSearch:pr-28 md:pr-48 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-50 dark:focus:ring-gray-700 focus:border-transparent"
        v-model.trim="search"
        placeholder="Search for a country.."
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
