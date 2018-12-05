<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <a href="/">
          <img src="../assets/img/common/logo.svg" alt="Logotype" class="header-logo">
        </a>
        <div class="header-wrap_right-block">
          <nav class="header_links">
            <a :href="`https://blog.maddevs.io/${this.lang === 'ru' ? 'ru' : ''}`" target="_blank">{{ $t('header-link_blog') }}</a>
            <router-link :to="`/${this.lang}/jobs`">{{ $t('header-link_careers') }}</router-link>
          </nav>
          <div class="header_soc-icons">
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
        <button @click="toggleMobileMenu()" class="header-mobile-menu_open">
          <img src="../assets/img/common/header/open-menu.svg" alt="Open mobile menu">
        </button>
      </div>
    </div>
    <div v-if="this.mobileMenu" class="header-mobile-menu">
      <div class="header-mobile-menu_wrap">
        <button @click="toggleMobileMenu()" class="header-mobile-menu_close">
          <img src="../assets/img/common/header/close-menu.svg" alt="Close mobile menu">
        </button>
        <div class="header-mobile-menu_list">
          <a href="/">{{ $t('header-link_home') }}</a>
          <a :href="`https://blog.maddevs.io/${this.lang === 'ru' ? 'ru' : ''}`" target="_blank">
            <span @click="toggleMobileMenu()">
              {{ $t('header-link_blog') }}
            </span>
          </a>
          <router-link :to="`/${this.lang}/jobs`">
            <span @click="toggleMobileMenu()">
              {{ $t('header-link_careers') }}
            </span>
          </router-link>
        </div>
        <div class="header-mobile-menu_address">
          <p>{{$t('address-footer')}}</p>
          <div class="header-mobile-menu_address-phonemail">
            <a href="tel:+996 555 429 055">+996 555 761 939</a>
            <a href="mailto:rock@maddevs.io">rock@maddevs.io</a>
          </div>
        </div>
        <div class="header-mobile-menu_soc-icons">
          <div class="social-icons_list-row">
              <a href="https://github.com/maddevsio" target="_blank">
                  <img src="../assets/img/common/header/git.svg" fill="red" alt="Github">
              </a>
              <a href="https://www.facebook.com/maddevsio" target="_blank">
                  <img src="../assets/img/common/header/fb.svg" alt="Facebook">
              </a>
              <a href="https://www.instagram.com/maddevsio/" target="_blank">
                  <img src="../assets/img/common/header/insta.svg" alt="Instagram">
              </a>
              <a href="https://blog.maddevs.io/" target="_blank">
                  <img src="../assets/img/common/header/medium.svg" alt="Medium">
              </a>
          </div>
          <div class="social-icons_list-row">
              <a href="https://twitter.com/MadDevsIO" target="_blank">
                  <img src="../assets/img/common/header/tw.svg" alt="Twitter">
              </a>
              <a href="https://www.slideshare.net/maddevs/presentations" target="_blank">
                  <img src="../assets/img/common/header/slide.svg" alt="Slideshare">
              </a>
              <a href="https://www.youtube.com/playlist?list=PLsmdb5W8ytypyXt1ut3lfBOnOZnDNqYIN" target="_blank">
                  <img src="../assets/img/common/header/yt.svg" alt="Youtube">
              </a>
              <a href="https://www.behance.net/maddevs" target="_blank">
                  <img src="../assets/img/common/header/beh.svg" alt="Behance">
              </a>
              <a href="https://t.me/maddevsio" target="_blank">
                  <img src="../assets/img/common/header/tel.svg" alt="Telegram">
              </a>
          </div>
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
      lang: 'en',
      mobileMenu: false,
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
      const route = Object.assign({}, this.$route);
      i18next.changeLanguage(curLang, () => {
        this.lang = curLang;
      });
      route.params.lang = curLang;
      this.$router.push(route);
      this.$emit('EventLanguage', this.lang);
    },
    toggleMobileMenu() {
      const chat = document.getElementById('tidio-chat');
      if (this.mobileMenu === false) {
        this.mobileMenu = true;
        this.disableScrollOnBody();
        chat.style.display = 'none';
      } else {
        chat.style.display = 'block';
        this.mobileMenu = false;
        this.enableScrollOnBody();
      }
    },
    disableScrollOnBody() {
      document.body.classList.add('scrollDisabled');
    },
    enableScrollOnBody() {
      document.body.classList.remove('scrollDisabled');
    }
  }
};
</script>
