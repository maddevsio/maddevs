import Vue from 'vue';
import Vuex from 'vuex';
import slackCounter from './modules/default-model';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    slackCounter
  }
});
