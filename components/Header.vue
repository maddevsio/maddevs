<template>
  <header class="header" :class="{ 'header--dark': headerDark }">
    <div class="container">
      <div class="header-wrap">
        <router-link :to="`/${this.lang}`">
          <img src="../assets/img/common/logo.svg" alt="Logotype" class="header-logo">
        </router-link>
        <div class="header-wrap_right-block">
          <nav class="header_links">
            <router-link :to="`/${this.lang}/services`">Services</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'main-header',
  data() {
    return {
      lang: 'en',
      mobileMenuActive: false,
      headerDark: false
    };
  },
  created() {
    this.lang = this.$nuxt.$router.history.current.params.lang === undefined ? 'en' : this.$store.state.locale;
    this.$store.commit('SET_LANG', this.lang);
    if (process.browser) {
      window.addEventListener('resize', this.toggleScrollOnBody);
    }
    this.changeColorHeader();
  },
  watch: {
    '$route' (to, from) {
      this.changeColorHeader();
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener('resize', this.toggleScrollOnBody);
    }
  },
  methods: {
    changeColorHeader() {
      if (this.$nuxt.$router.history.current.path.includes('management')) {
        this.headerDark = true;
      } else {
        this.headerDark = false;
      }
    },
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
      position: relative;

      a {
        color: #ff0000;
        text-decoration: none;
        margin-right: 15px;
        font-size: 16px;
        font-family: 'MADEEvolveSans-regular',
        sans-serif;
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
      }
    }

    &-logo {
      width: 40px;
      height: 70px;
    }
  }

  .header--dark {
    .container {
      max-width: 100%;

      .header-wrap_right-block {
        .header_links {
          a {
            color: $text-color--black;
          }
        }
      }
    }
  }
</style>
