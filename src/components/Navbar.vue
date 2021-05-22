<template>
  <nav class="bg-green-400 flex justify-between items-center h-14 px-2">
    <h1 class="font-bold text-xl">Where in the world?</h1>

    <Icon :icon="iMoonWaxingCrescent" :color="'green'" :text="'Dark mode'" />
  </nav>
</template>

<script>
import Icon from "@/components/Icon.vue";
import { mdiMoonWaxingCrescent, mdiWhiteBalanceSunny } from "@mdi/js";
export default {
  name: "Navbar",
  components: {
    Icon,
  },
  setup() {
    const iMoonWaxingCrescent = mdiMoonWaxingCrescent,
      iWhiteBalanceSunny = mdiWhiteBalanceSunny;

    return { iMoonWaxingCrescent, iWhiteBalanceSunny };
  },
};
</script>

<style></style>
