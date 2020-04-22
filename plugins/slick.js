import Vue from 'vue';
import VueSlick from 'vue-slick';
import '~/node_modules/slick-carousel/slick/slick.css';

if (process.client) {
  Vue.component('slick', VueSlick);
}
