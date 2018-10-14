<template>
  <div id="app">
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

export default {
  name: 'App',
  data() {
    return {
      lang: i18n.language,
    };
  },
  components: { Header, Footer },
  methods: {
    getLanguage(lang) {
      this.lang = lang;
    }
  }
};
</script>
