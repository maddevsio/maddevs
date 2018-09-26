import Vue from 'vue';
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

import en from '../locales/en/resource';
import ru from '../locales/ru/resource';

Vue.use(VueI18Next);

i18next.init({
  lng: 'en',
  resources: {
    en: { translation: en },
    ru: { translation: ru }
  }
});

const i18n = new VueI18Next(i18next);
export default i18n;
