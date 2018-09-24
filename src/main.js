import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

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
  store,
  render: h => h(App)
});
