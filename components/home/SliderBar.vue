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
        height="496px"
        width="895x"
        top="124px"
       :src="slide.src"
       >

              <div class="button_slider">
         <v-card-title><h2>{{slide.title}}</h2>  </v-card-title>

           <v-card-text class="dark--text">
             <h3>{{slide.diagnosis}}</h3></v-card-text>
               <v-card-text>
               <div class="progress">
                  <div class="collected">
               <p>Собрано</p>
                    <h2>{{slide.collected}}</h2></div>
                <div class="left">
                  <p>Осталось</p>
                  <h2>{{slide.left}}</h2>
                </div>
                  <div class="need">
                <p>Необходимо</p>
                <h2>{{slide.need}}</h2>

               </div>
                  <v-btn rounded dark color="primary">
             <p>Пожертвовать</p>
            </v-btn>

               </div>
              </v-card-text>
                             </div>
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
        { src: require('@/assets/images/slide1.png'), title: 'Бурганова Альфия, 16 лет', diagnosis: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция' ,
collected: '65065 ₽' ,left: '435435 ₽', need: '500 500 ₽' },
        { src: require('@/assets/images/slide2.png'), title: 'Хабибуллин Данияр, 6 лет', diagnosis: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция' ,
collected: '65065 ₽' ,left: '435435 ₽', need: '500 500 ₽' },

      ],
};
  },
});
</script>
<style lang="scss" scoped>
.progress {
display:flex;
}
.left {
margin-left: 40px;
 }
.collected {
  }
  .need {
    margin-left: 40px;
  }
  .button_slider {
    color: #222;
    margin-left: 20px;
width: 830px;
height: 180px;
background: #fff;
border-radius: 20px;
    margin-bottom: 20px;

  }

   </style>
