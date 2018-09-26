<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <a href="/">
          <img src="../assets/img/svg/logo.svg" alt="Logotype" class="header-logo">
        </a>
        <button class="mobile-menu_btn" @click="switchLanguage()">
          {{ lang === 'en' ? 'Русский' : 'English' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import i18next from 'i18next';
export default {
  name: 'header',
  data() {
    return {
      lang: 'en'
    };
  },
  methods: {
    switchLanguage() {
      const curLang = i18next.language === 'en' ? 'ru' : 'en';
      i18next.changeLanguage(curLang, () => {
        this.lang = curLang
      });
    }
  }
};
</script>
