import Vue from 'vue';
import VueScrollto from 'vue-scrollto';
if (process.client) {
  Vue.use(VueScrollto);
}