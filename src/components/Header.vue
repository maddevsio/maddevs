<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <a href="/">
          <img src="../assets/img/common/logo.svg" alt="Logotype" class="header-logo">
        </a>
        <div class="header-wrap_right-block">
          <div class="header_soc-icons">
            <a href="https://github.com/maddevsio" target="_blank">
              <img src="../assets/img/common/header/git-header.svg" alt="Github">
            </a>
            <a href="https://ru.linkedin.com/company/mad-devs" target="_blank">
              <img src="../assets/img/common/header/in-header.svg" alt="LinkedIn">
            </a>
            <a href="https://www.facebook.com/maddevsio" target="_blank">
              <img src="../assets/img/common/header/fb-header.svg" alt="Facebook">
            </a>
          </div>
          <button class="mobile-menu_btn" v-on:click.prevent="switchLanguage">
            {{ lang === 'en' ? 'Русский' : 'English' }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import i18next from 'i18next';
export default {
  name: 'main-header',
  data() {
    return {
      lang: 'en'
    };
  },
  created() {
    const curLang = location.pathname.includes('en') ? 'en' : 'ru';
    i18next.changeLanguage(curLang, () => {
      this.lang = curLang;
    });
  },
  methods: {
    switchLanguage(event) {
      event.preventDefault();
      const curLang = i18next.language === 'en' ? 'ru' : 'en';
      i18next.changeLanguage(curLang, () => {
        this.lang = curLang;
      });
      history.pushState('', curLang, curLang);
      this.$emit('EventLanguage', this.lang);
    },
  }
};
</script>
