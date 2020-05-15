<template>
 <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
  >
         <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
             <v-card
      class="mx-auto"
      max-width="870"
    >
       <v-img
        class="white--text align-end"
        height="440px"
        :src="slide.src"
      >
        <v-card-title>Бурганова Альфия</v-card-title>
       <v-btn text small>Пожертвовать</v-btn>
        </v-img>
                     </v-card>
       </v-carousel-item>
  </v-carousel>

</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      slides: [
        { src: require('@/assets/images/slide1.png'), title: 'Пункт приема и раздачи одежды' },
        { src: require('@/assets/images/slide1.png'), title: 'Пункт приема и раздачи одежды' },
      ],
    };
  },
});
</script>
