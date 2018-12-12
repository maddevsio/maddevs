<template>
  <div id="app">
    <cookie-law
      theme="blood-orange"
      :message="$t('cookie-message')"
      position="top"
      transitionName="slideFromTop"
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
      cookieHeight: 0
    };
  },
  components: { Header, Footer, CookieLaw },
  methods: {
    getLanguage(lang) {
      this.lang = lang;
    },
  },
  updated() {
    const cookie = document.getElementsByClassName('Cookie');
    const main = document.getElementsByClassName('main')[0];
    const button = document.getElementsByClassName('Cookie__button')[0];
    if (cookie.length > 0) {
      this.cookieHeight = (cookie[0].clientHeight - 10) + 'px';
      main.style.marginTop = this.cookieHeight;
      button.addEventListener('click', () => {
        main.style.marginTop = '0';
      });
      window.addEventListener('resize', () => {
        try {
          this.cookieHeight = (cookie[0].clientHeight - 10) + 'px';
          main.style.marginTop = this.cookieHeight;
        } catch (error) {
          return true;
        }
      });
    }
  },
};
</script>
