<template>
  <div class="md:p-5">
    <router-link
      to="/"
      class="flex w-32 px-5 bg-gray-50 dark:bg-gray-700 shadow"
    >
      <Icon :icon="iArrowLeft" :color="colorComputed" />
      <span class="py-1 pr-2 ">Back</span>
    </router-link>
  </div>
</template>

<script>
import { mdiArrowLeft } from "@mdi/js";
import Icon from "@/components/Icon";
import { computed, ref } from "vue";
export default {
  components: {
    Icon,
  },
  setup() {
    const color = ref(null);
    const iArrowLeft = mdiArrowLeft;

    const colorComputed = computed(() => {
      if (JSON.parse(localStorage.getItem("darkmode"))) {
        return (color.value = "hsl(0, 0%, 98%)");
      } else {
        return (color.value = "hsl(200, 15%, 8%)");
      }
    });

    return { iArrowLeft, colorComputed };
  },
};
</script>
