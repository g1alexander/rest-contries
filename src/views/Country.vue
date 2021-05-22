<template>
  <div class="xs:container-fluid md:container mx-auto">
    <Navbar />

    <div class="p-5 ">
      <router-link to="/" class="flex w-32 px-5 bg-black">
        <Icon :icon="iArrowLeft" :color="'white'" />
        <span class="py-1 pr-2 text-white">Back</span>
      </router-link>
    </div>

    <article>
      <img :src="country.flag" width="400" alt="" srcset="" />
      <div>
        <h2>{{ country.name }}</h2>
        <div>
          <div class="info1">
            <p>Native Name: {{ country.nativeName }}</p>
            <p>Population: {{ country.population }}</p>
            <p>Region: {{ country.region }}</p>
            <p>Sub Region: {{ country.subregion }}</p>
            <p>Capital: {{ country.capital }}</p>
          </div>
          <div class="info2">
            <p>
              Top Level Domain:
              <span v-for="(dom, index) in country.topLevelDomain" :key="index"
                >{{ dom }},
              </span>
            </p>
            <p>
              Courrencies:
              <span v-for="(curr, index) in country.currencies" :key="index"
                >{{ curr.name }}
              </span>
            </p>
            <p>
              Languages:
              <span v-for="(lang, index) in country.languages" :key="index"
                >{{ lang.name }},
              </span>
            </p>
          </div>

          <div class="info3">
            Border Countries:
            <span v-for="(border, index) in country.borders" :key="index">
              {{ border }},
            </span>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useApiOne } from "@/hooks/useApi.js";
import { mdiArrowLeft } from "@mdi/js";
import Navbar from "@/components/Navbar";
import Icon from "@/components/Icon";

export default {
  components: {
    Navbar,
    Icon,
  },
  props: {
    country: String,
  },
  setup(props) {
    const iArrowLeft = mdiArrowLeft;
    const country = ref({});

    onMounted(() => {
      useApiOne(props.country).then((res) => (country.value = res[0]));
    });
    return { iArrowLeft, country };
  },
};
</script>
