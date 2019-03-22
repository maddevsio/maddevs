import Vue from 'vue';
import Slick from 'vue-slick';
import '~/node_modules/slick-carousel/slick/slick.css';

const VueSlick = {
  install(Vue, options) {
    Vue.component('slick', Slick);
  }
};
Vue.use(VueSlick);
export default VueSlick;