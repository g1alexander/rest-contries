<template>
  <h1 class="bg-green-500 font-bold text-center">Hola mundo</h1>
  <svg>
    <path fill="green" :d="iAccount" />
  </svg>
</template>

<script>
import { mdiAccount } from "@mdi/js";
export default {
  name: "Home",
  setup() {
    const iAccount = mdiAccount;

    return { iAccount };
  },
};
</script>
