<template>
  <div class="xss:pt-5 md:px-5 md:pt-20 md:flex h-80 items-center">
    <img :src="country.flag" class="md:w-5/12 h-80" alt="" srcset="" />
    <div class="md:ml-10 md:py-5 xss:pt-5 xss:pb-10">
      <h2 class="font-bold mb-7 text-2xl">{{ country.name }}</h2>
      <div class="md:flex">
        <div class="info1 md:pr-4">
          <p class="pb-1">
            <span class="font-bold">Native Name: </span>
            {{ country.nativeName }}
          </p>
          <p class="pb-1">
            <span class="font-bold">Population: </span>
            {{ formatPopulation(country.population) }}
          </p>
          <p class="pb-1">
            <span class="font-bold">Region: </span> {{ country.region }}
          </p>
          <p class="pb-1">
            <span class="font-bold">Sub Region: </span>
            {{ country.subregion }}
          </p>
          <p><span class="font-bold">Capital: </span> {{ country.capital }}</p>
        </div>
        <div class="info2 md:pl-4">
          <p class="pb-1">
            <span class="font-bold">Top Level Domain: </span>
            <span v-for="(dom, index) in country.topLevelDomain" :key="index"
              >{{ dom }},
            </span>
          </p>
          <p class="pb-1">
            <span class="font-bold">Courrencies: </span>
            <span v-for="(curr, index) in country.currencies" :key="index"
              >{{ curr.name }}
            </span>
          </p>
          <p class="pb-1">
            <span class="font-bold">Languages: </span>
            <span v-for="(lang, index) in country.languages" :key="index"
              >{{ lang.name }},
            </span>
          </p>
        </div>
      </div>
      <div v-if="border" class="info3 mt-10">
        <span class="font-bold">Border Countries: </span>
        <span v-for="(border, index) in country.borders" :key="index">
          {{ border }},
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useApiOne } from "@/hooks/useApi.js";
import { useActions } from "@/hooks/useActions";
export default {
  props: {
    country: String,
  },
  setup(props) {
    const country = ref({});
    const name = props.country.split("-").join(" ");
    const { formatPopulation } = useActions();

    const border = computed(() => {
      return undefined !== country.value.borders && country.value.borders.length
        ? true
        : false;
    });

    onMounted(() => {
      useApiOne(name).then((res) => (country.value = res[0]));
    });
    return { country, border, formatPopulation };
  },
};
</script>
