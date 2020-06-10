<template>
  <v-app>
    <HeaderBar />
    <Searcher />
    <NavBar />
    <v-divider />
    <v-content>
      <nuxt />
    </v-content>
    <FooterBar />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import HeaderBar from '~/components/header-bar/HeaderBar.vue';
import Searcher from '@/components/header-bar/Searcher.vue';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default Vue.extend({
  components: {
    HeaderBar,
    Searcher,
    NavBar,
    FooterBar,
  },
  head () {
    return this.$nuxtI18nSeo();
  },
});
</script>
