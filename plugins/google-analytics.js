import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

export default ({
  app: {
    router
  }
}) => {
  if (process.client) {
    Vue.use(VueAnalytics, {
      id: 'UA-83208754-1',
      router
    });
  }
};