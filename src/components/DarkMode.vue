<template>
  <div @click="darkMode" class="flex items-center cursor-pointer">
    <Icon :icon="icon" :color="color" :text="text" />
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
      text = ref(""),
      color = ref(null);

    onMounted(() => {
      if (JSON.parse(localStorage.getItem("darkmode"))) {
        text.value = "Light Mode";
        icon.value = mdiWhiteBalanceSunny;
        color.value = "hsl(0, 0%, 98%)";
      } else {
        text.value = "Dark Mode";
        icon.value = mdiMoonWaxingCrescent;
        color.value = "hsl(200, 15%, 8%)";
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
        color.value = "hsl(0, 0%, 98%)";
      } else {
        document.documentElement.classList.remove("dark");
        icon.value = mdiMoonWaxingCrescent;
        text.value = "Dark Mode";
        color.value = "hsl(200, 15%, 8%)";
      }
    };

    return { icon, text, darkMode, color };
  },
};
</script>
