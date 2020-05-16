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
      max-width="1440"
    >
       <v-img
        class="white--text align-end"
        height="496px"
        :src="slide.src"
             >
           <v-card-title>{{slide.title}} </v-card-title>
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
        { src: require('@/assets/images/slide1.png'), title: 'Бурганова Альфия, 16 лет' },
        { src: require('@/assets/images/slide2.png'), title: 'Пункт приема и раздачи одежды' },

      ],
};
  },
});
</script>
<style lang="scss" scoped>
 </style>
