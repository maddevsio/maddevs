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
    <div v-if="this.mobileMenu" class="header-mobile-menu">
      <div class="header-mobile-menu_wrap">
        <button @click="toggleMobileMenu()" class="header-mobile-menu_close">
          <img src="../assets/img/common/header/close-menu.svg" alt="Close mobile menu">
        </button>
        <div class="header-mobile-menu_list">
          <a href="/">{{ $t('header-link_home') }}</a>
          <a :href="`https://blog.maddevs.io/${this.lang === 'ru' ? 'ru' : ''}`" target="_blank" rel="noreferrer">
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
          <p>{{$t('address-footer-kg')}}</p>
          <div class="header-mobile-menu_address-phonemail">
            <a href="tel:+996 555 429 055">+996 555 761 939</a>
            <a href="mailto:team@maddevs.io">team@maddevs.io</a>
          </div>
        </div>
        <div class="header-mobile-menu_soc-icons">
          <div class="social-icons_list-row">
              <a href="https://github.com/maddevsio" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/header/git.svg" fill="red" alt="Github">
              </a>
              <a href="https://www.facebook.com/maddevsio" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/header/fb.svg" alt="Facebook">
              </a>
              <a href="https://www.instagram.com/maddevsio/" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/header/insta.svg" alt="Instagram">
              </a>
              <a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/header/medium.svg" alt="Medium">
              </a>
          </div>
          <div class="social-icons_list-row">
              <a href="https://twitter.com/MadDevsIO" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/header/tw.svg" alt="Twitter">
              </a>
              <a href="https://www.slideshare.net/maddevs/presentations" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/header/slide.svg" alt="Slideshare">
              </a>
              <a href="https://www.youtube.com/playlist?list=PLsmdb5W8ytypyXt1ut3lfBOnOZnDNqYIN" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/header/yt.svg" alt="Youtube">
              </a>
              <a href="https://www.behance.net/maddevs" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/header/beh.svg" alt="Behance">
              </a>
              <a href="https://t.me/maddevsio" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/header/tel.svg" alt="Telegram">
              </a>
          </div>
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
      mobileMenu: false,
    };
  },
  created() {
    this.lang = this.$nuxt.$router.history.current;
  },
  mounted() {
    const self = this;
    window.addEventListener('resize', function(e) {
      if (window.innerWidth >= 480) {
        document.body.classList.remove('scrollDisabled');
      } else if (window.innerWidth < 480) {
        if (self.mobileMenu === true) {
          document.body.classList.add('scrollDisabled');
        }
      }
    });
  },
  methods: {
    switchLanguage(locale) {
      // -- Getting the path before starting
      const beforePath = this.$nuxt.$router.history.current.path;
      this.lang = locale;

      // -- Removing the previous locale from the url
      let result = '';
      result = beforePath.replace('/en', '');
      result = result.replace('/ru', '');

      // -- Redirecting to the same page but in the desired language
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

<style lang="scss" scoped>
  .header {
  width: 100%;
  position: absolute;
  z-index: 2;
  padding-top: 30px;
  &_links {
    margin-right: 24px;
    position: relative;
    a {
      color: #fff;
      text-decoration: none;
      margin-right: 24px;
      font-size: 16px;
      font-family: 'MADEEvolveSans-regular',
      sans-serif;
    }
    .router-link-active {
      color: #ec2227;
    }
    &::before {
      content: '';
      width: 1px;
      height: 25px;
      display: block;
      position: absolute;
      right: 0;
      top: -3px;
      background-color: rgba(255, 255, 255, 0.3);
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
    color: #fff;
    font-size: 14px;
    font-family: 'MADEEvolveSans-regular', sans-serif;
    border: none;
    cursor: pointer;
    padding-right: 0;
  }
  &-mobile-menu {
    width: 100%;
    height: 100%;
    min-width: 320px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
    z-index: 999;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    &_close {
      position: fixed;
      top: 20px;
      right: 6px;
      border: none;
      background-color: transparent;
      padding: 10px;
      box-sizing: border-box;
      img {
        width: 25px;
        height: 25px;
      }
    }
    &_list {
      margin-top: 40px;
      margin-bottom: 20px;
      a {
        display: block;
        font-size: 28px;
        color: #2c1c1c;
        font-family: 'MADEEvolveSans-bold',
        sans-serif;
        font-weight: normal;
        text-align: center;
        text-decoration: none;
        padding: 12px 0;
      }
      .router-link-active {
        color: #ec2227;
      }
    }
    &_address {
      width: 100%;
      text-align: center;
      padding: 32px 0 18px;
      border-top: 1px solid #e8e8e8;
      p, a {
        max-width: 290px;
        font-size: 16px;
        color: #000;
        font-family: 'MADEEvolveSans-regular',
        sans-serif;
        margin: 0 auto;
        text-decoration: none;
      }
      p {
        margin-bottom: 16px;
      }
      &-phonemail {
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          &:last-child {
            margin-top: 8px;
          }
        }
      }
    }
    &_soc-icons {
      .social-icons_list-row {
        text-align: center;
      }
    }
  }
}

@media only screen and (min-width: 480px) {
  .header-mobile-menu {
    display: none;
  }
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
  .header-mobile-menu_soc-icons .social-icons_list-row {
    &:first-child {
      margin-bottom: 10px;
    }
    a {
      margin: 0 8px;
      img {
        width: 30px;
        height: 30px;
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
