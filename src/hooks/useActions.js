import { inject } from "vue";

export function useActions() {
  const countries = inject("countries");
  const countriesFilter = inject("countriesFilter");
  const search = inject("search");
  const region = inject("region");

  const searchForm = () => {
    const searchCliente = search.value.toLowerCase();

    const filtro = countries.value.filter((country) => {
      const textApi = country.name.common.toLowerCase();

      if (textApi.includes(searchCliente)) {
        return country;
      }
    });
    countriesFilter.value = filtro;
  };

  const filterRegion = () => {
    const filtro = countries.value.filter((pais) => {
      return pais.region.includes(region.value);
    });
    countriesFilter.value = filtro;
  };

  const formatPopulation = (num) => {
    return new Intl.NumberFormat("de-DE").format(num);
  };

  return { searchForm, filterRegion, formatPopulation };
}
