<template>
  <section class="header-mobile-menu">
    <div class="header-mobile-menu_wrap">
      <button @click="closeMobileMenu()" class="header-mobile-menu_close">
        <img src="../../assets/img/common/header/close-menu.svg" alt="Close mobile menu">
      </button>
      <div class="header-mobile-menu_list">
        <a href="/">{{ $t('header-link_home') }}</a>
        <a :href="`https://blog.maddevs.io/${this.lang === 'ru' ? 'ru' : ''}`" target="_blank" rel="noreferrer">
          <span @click="closeMobileMenu()">
            {{ $t('header-link_blog') }}
          </span>
        </a>
        <router-link :to="`/${this.lang}/jobs`">
          <span @click="closeMobileMenu()">
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
                <img src="../../assets/img/common/header/git.svg" fill="red" alt="Github">
            </a>
            <a href="https://www.facebook.com/maddevsio" target="_blank" rel="noreferrer">
                <img src="../../assets/img/common/header/fb.svg" alt="Facebook">
            </a>
            <a href="https://www.instagram.com/maddevsio/" target="_blank" rel="noreferrer">
                <img src="../../assets/img/common/header/insta.svg" alt="Instagram">
            </a>
            <a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">
                <img src="../../assets/img/common/header/medium.svg" alt="Medium">
            </a>
        </div>
        <div class="social-icons_list-row">
            <a href="https://twitter.com/MadDevsIO" target="_blank" rel="noreferrer">
                <img src="../../assets/img/common/header/tw.svg" alt="Twitter">
            </a>
            <a href="https://www.slideshare.net/maddevs/presentations" target="_blank" rel="noreferrer">
                <img src="../../assets/img/common/header/slide.svg" alt="Slideshare">
            </a>
            <a href="https://www.youtube.com/playlist?list=PLsmdb5W8ytypyXt1ut3lfBOnOZnDNqYIN" target="_blank" rel="noreferrer">
                <img src="../../assets/img/common/header/yt.svg" alt="Youtube">
            </a>
            <a href="https://www.behance.net/maddevs" target="_blank" rel="noreferrer">
                <img src="../../assets/img/common/header/beh.svg" alt="Behance">
            </a>
            <a href="https://t.me/maddevsio" target="_blank" rel="noreferrer">
                <img src="../../assets/img/common/header/tel.svg" alt="Telegram">
            </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'mobile-menu',
  data() {
    return {
      lang: this.$store.state.locale
    };
  },
  methods: {
    closeMobileMenu() {
      this.$emit('CloseMobileMenu', false);
    }
  }
};
</script>

<style lang="scss" scoped>
.header-mobile-menu {
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
@media only screen and (min-width: 480px) {
  .header-mobile-menu {
    display: none;
  }
  .header-mobile-menu_open {
    display: none;
  }
}
@media only screen and (max-width: 480px) {
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
