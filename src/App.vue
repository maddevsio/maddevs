<template>
  <div id="app">
    <!-- <Cookie /> -->
    <Header @EventLanguage="getLanguage"/>
    <router-view :language="this.lang"/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Cookie from './components/blocks/cookie';
import i18n from 'i18next';
import './assets/styles/index.scss';

export default {
  name: 'App',
  data() {
    return {
      lang: i18n.language
    };
  },
  components: { Header, Footer, Cookie },
  methods: {
    getLanguage(lang) {
      this.lang = lang;
    },
  }
};
</script>
