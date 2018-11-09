// import Es6Promise from 'es6-promise';
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueAnalytics from 'vue-analytics';
import App from './App';
import store from './store';
import router from './router';
import i18n from './utils/i18n';
// Es6Promise.polyfill();

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-83208754-1',
  router
});

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
});
