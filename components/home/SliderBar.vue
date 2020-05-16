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
         <v-card-item>
           <v-card-title><h2>Бурганова Альфия, 16 лет</h2></v-card-title>
         <v-card-text>
           <h2>Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция</h2>
                 <div class="progress">
                <div class="collected">
                  <p>Собрано</p>
                  <h2>65 065 ₽</h2>
                </div>
                <div class="left">
                  <p>Осталось</p>
                  <h2>435 435 ₽</h2>
                </div>
               <div class="need">
                <p>Необходимо</p>
                <h2>500 500 ₽</h2>
               </div>
               </div>
           <div class="button_slider_button">
                 <img src="img/Group28.png">
                 <a href="">Пожертвовать</a>
               </div>
                </v-card-text>
                </v-card-item>
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
