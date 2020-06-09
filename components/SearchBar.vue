<template>
  <v-col id="SearchContainer" class="elevation-5">
    <v-autocomplete
      id="SearchInput"
      v-model="value"
      :items="items"
      background-color="white"
      item-color="green"
      label="Введите фразу для поиска"
      no-data-text="Результатов нет. Попробуйте переформулировать."
      dense
      clearable
      rounded
      append-icon=""
    ></v-autocomplete>
  </v-col>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      items: [
        'Сабирзянова Римма Минзагитовна',
        'Садака',
        'Садака в размере 100 000 ₽ собрана за 10 дней в м...',
        'Садыков Амирхан',
        'Садыков Амирхан',
      ],
    };
  },
};
</script>

<style scoped>
#SearchContainer {
  display: none;
  position: absolute;
  margin-left: 400px;
  margin-top: 50px;
  width: 600px;
  z-index: 100;
  background: white;
}
</style>
