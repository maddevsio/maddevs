<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <a href="/">
          <img src="../assets/img/common/logo.svg" alt="Logotype" class="header-logo">
        </a>
        <div class="header-wrap_right-block">
          <nav class="header_links">
            <a :href="`https://blog.maddevs.io/${this.lang === 'ru' ? 'ru' : ''}`" target="_blank" rel="noreferrer">{{ $t('header-link_blog') }}</a>
            <router-link :to="`/${this.lang}/jobs`">{{ $t('header-link_careers') }}</router-link>
          </nav>
          <div class="header_soc-icons">
            <a href="https://ru.linkedin.com/company/mad-devs" target="_blank" rel="noreferrer">
              <img src="../assets/img/common/header/in-header.svg" alt="LinkedIn">
            </a>
            <a href="https://www.facebook.com/maddevsio" target="_blank" rel="noreferrer">
              <img src="../assets/img/common/header/fb-header.svg" alt="Facebook">
            </a>
          </div>
          <button v-if="lang == 'en'" class="switch-lang" v-on:click.prevent="switchLanguage('ru')">Русский</button>
          <button v-else class="switch-lang" v-on:click.prevent="switchLanguage('en')">English</button>
        </div>
        <button @click="toggleMobileMenu()" class="header-mobile-menu_open">
          <img src="../assets/img/common/header/open-menu.svg" alt="Open mobile menu">
        </button>
      </div>
    </div>
    <MobMenu v-if="mobileMenuActive" @CloseMobileMenu="toggleMobileMenu"/>
  </header>
</template>

<script>
import MobMenu from '@/components/ui/mobile-menu';

export default {
  name: 'main-header',
  components: { MobMenu },
  data() {
    return {
      lang: 'en',
      mobileMenuActive: false
    };
  },
  created() {
    this.lang = this.$nuxt.$router.history.current.params.lang === undefined ? 'en' : this.$store.state.locale;
    this.$store.commit('SET_LANG', this.lang);
    if (process.browser) {
      window.addEventListener('resize', this.toggleScrollOnBody);
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener('resize', this.toggleScrollOnBody);
    }
  },
  methods: {
    switchLanguage(locale) {
      const beforePath = this.$nuxt.$router.history.current.path;
      this.$store.commit('SET_LANG', locale);
      this.lang = this.$store.state.locale;
      let result = '';
      result = beforePath.replace('/en', '');
      result = result.replace('/ru', '');
      if ( locale == 'ru' || locale == 'en' ) {
        this.$nuxt.$router.replace({ path: '/' + locale + result });
      } else {
        if ( result == '/' ) {
          this.$nuxt.$router.replace({ path: '/' + locale });
        } else {
          this.$nuxt.$router.replace({ path: '/' + locale + result });
        }
      }
    },
    toggleMobileMenu(bool) {
      const chat = document.getElementById('tidio-chat');
      if (this.mobileMenuActive === false) {
        this.mobileMenuActive = true;
        this.disableScrollOnBody();
        chat.style.display = 'none';
      } else {
        chat.style.display = 'block';
        this.mobileMenuActive = false;
        this.enableScrollOnBody();
      }
    },
    toggleScrollOnBody() {
      if (window.innerWidth >= 480) {
        this.enableScrollOnBody();
      } else if (window.innerWidth < 480) {
        if (self.mobileMenuActive === true) {
          this.disableScrollOnBody();
        }
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

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .header {
    width: 100%;
    position: absolute;
    z-index: 2;
    padding-top: 30px;
    &_links {
      margin-right: 24px;
      position: relative;
      a {
        color: $text-color--white;
        text-decoration: none;
        margin-right: 24px;
        font-size: 16px;
        font-family: 'MADEEvolveSans-regular',
        sans-serif;
      }
      .nuxt-link-active {
        color: $accent-color--red;
      }
      .router-link-active {
        color: $accent-color--red;
      }
      &::before {
        content: '';
        width: 1px;
        height: 25px;
        display: block;
        position: absolute;
        right: 0;
        top: -3px;
        background-color: rgba($bgcolor--white, 0.3);
      }
    }
    &-wrap {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      &_right-block {
        display: flex;
        align-items: center;
        padding: 24px 0;
        .header_soc-icons {
          height: 22px;
          a {
            display: inline-block;
            margin-right: 18px;
            img {
              display: block;
            }
          }
        }
      }
    }
    &-logo {
      width: 40px;
      height: 70px;
    }
    .switch-lang {
      background-color: transparent;
      color: $text-color--white;
      font-size: 14px;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      border: none;
      cursor: pointer;
      padding-right: 0;
    }
  }

  @media only screen and (min-width: 480px) {
    .header-mobile-menu_open {
      display: none;
    }
  }
  @media only screen and (max-width: 480px) {
    .header_links {
      margin-right: 14px;
      white-space: nowrap;
      a {
        font-size: 14px;
        margin-right: 14px;
      }
    }
    .header-wrap_right-block {
      margin-left: auto;
      padding: 25px;
      .header_links {
        display: none;
      }
      .header_soc-icons {
        display: none;
      }
      .switch-lang {
        font-size: 14px;
      }
    }
    .header-wrap_right-block .header_soc-icons {
      height: 18px;
      white-space: nowrap;
      a {
        margin-right: 12px;
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
    .header-mobile-menu_open {
      display: block;
      background-color: transparent;
      border: none;
      padding: 24px 0;
    }
  }
</style>
