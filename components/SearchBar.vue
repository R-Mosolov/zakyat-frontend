<template>
  <v-col id="SearchContainer" class="d-none">
    <v-text-field
      id="SearchInput"
      v-model="message2"
      solo
      label="Введите фразу для поиска"
      clearable
      @change="checkAdvices"
    />
  </v-col>
</template>

<script>
import checkAdvices from '~/plugins/searcher/check-advices';

export default {
  name: 'SearchBar',
  methods: {
    checkAdvices,
  },
};
</script>

<style scoped>
#SearchContainer {
  display: flex;
  justify-content: center;
}
</style>
