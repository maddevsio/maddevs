<template>
  <div id="app">
    <cookie-law
      theme="blood-orange"
      :message="$t('cookie-message')"
      :buttonText="$t('cookie-button')"
    ></cookie-law>
    <Header @EventLanguage="getLanguage"/>
    <router-view :language="this.lang"/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/index.scss';
import i18n from 'i18next';
import CookieLaw from 'vue-cookie-law';

export default {
  name: 'App',
  data() {
    return {
      lang: i18n.language,
    };
  },
  components: { Header, Footer, CookieLaw },
  methods: {
    getLanguage(lang) {
      this.lang = lang;
    }
  }
};
</script>
