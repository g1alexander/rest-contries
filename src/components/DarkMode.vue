<template>
  <div @click="darkMode" class="flex items-center cursor-pointer">
    <Icon :icon="icon" :color="'green'" :text="text" />
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import { mdiMoonWaxingCrescent, mdiWhiteBalanceSunny } from "@mdi/js";
import { onMounted, ref } from "vue";

export default {
  components: { Icon },
  setup() {
    const icon = ref(null),
      text = ref("");

    onMounted(() => {
      if (JSON.parse(localStorage.getItem("darkmode"))) {
        text.value = "Light Mode";
        icon.value = mdiWhiteBalanceSunny;
      } else {
        text.value = "Dark Mode";
        icon.value = mdiMoonWaxingCrescent;
      }
    });

    const darkMode = () => {
      localStorage.setItem(
        "darkmode",
        !JSON.parse(localStorage.getItem("darkmode"))
      );
      if (JSON.parse(localStorage.getItem("darkmode"))) {
        document.documentElement.classList.add("dark");
        icon.value = mdiWhiteBalanceSunny;
        text.value = "Light Mode";
      } else {
        document.documentElement.classList.remove("dark");
        icon.value = mdiMoonWaxingCrescent;
        text.value = "Dark Mode";
      }
    };

    return { icon, text, darkMode };
  },
};
</script>
