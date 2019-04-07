import Vue from 'vue';
import VueYandexMetrika from 'vue-yandex-metrika';

export default ({
  app: {
    router
  }
}) => {
  if (process.client) {
    Vue.use(VueYandexMetrika, {
      id: 52976554,
      router: router,
      env: process.env.NODE_ENV,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
  }
}