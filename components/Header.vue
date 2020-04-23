<template>
  <header class="header">
    <div class="container">
      <div class="header__header-content_wrap">
        <div class="header__left-nav_bar">
          <router-link :to="`/`">
            <img src="../assets/img/common/logo.svg" alt="Logotype" class="header__header-logo">
          </router-link>
          <nav class="header__header-routes_links">
            <router-link :to="`/`">About</router-link>
            <router-link :to="`/services`">Services</router-link>
            <router-link :to="`/projects`">Projects</router-link>
            <router-link :to="`/careers`">Careers</router-link>
          </nav>
        </div>
        <div class="header__right-content">
          <div class="header__right-text_content">
            <div class="header__soc-links_wrap">
              <a href="https://twitter.com/maddevsio" target="_blank" class="header__twitter-link header__soc-link">
                <img src="../assets/img/Header/twitter-icon.svg" alt="Twitter">
              </a>
              <a href="https://ru.linkedin.com/company/mad-devs" target="_blank" class="header__lindekin-link header__soc-link">
                <img src="../assets/img/Header/lindekin-icon.svg" alt="Lindekin">
              </a>
              <a href="https://www.facebook.com/maddevsio" target="_blank" class="header__facebook-link header__soc-link">
                <img src="../assets/img/Header/facebook-icon.svg" alt="Facebook">
              </a>
            </div>
            <div class="header__selected-phone">+44 20 3984 8555</div>
            <ul class="header__phones-list">
              <li class="header__phone-item"></li>
            </ul>
            <a href="#" class="header__mailto-link">team@maddevs.io</a>
          </div>
          <buttonTrigger :buttonInnerText="buttonInnerText"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'main-header',
  components: {
    buttonTrigger
  },
  data() {
    return {
      buttonInnerText: 'Contact me'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .header {
    width: 100%;
    position: fixed;
    z-index: 2;
    padding-top: 155px;
    background: $header-gradient--black-transparent;

    button {
      width: 135px;
      height: 40px;
      color: $text-color--red;
      border-color: $border-color--red;
    }

    &__header-content_wrap {
      display: flex;
      justify-content: space-between;
      margin-top: -120px;
    }

    &__header-logo {
      width: 40px;
      height: 70px;
    }

    &__header-routes_links {
      position: relative;
      padding-top: 9px;
      padding-left: 55px;

      a {
        color: $text-color--grey;
        text-decoration: none;
        margin-right: 26px;
        font-size: 18px;
        font-family: 'Hoves-Regular';
      }
    }

    &__left-nav_bar,
    &__right-content,
    &__right-text_content {
      display: flex;
    }

    &__right-text_content {
      display: flex;
      padding-top: 9px;
    }

    &__soc-links_wrap {
      padding-right: 26px;
    }

    &__soc-link {
      padding-right: 5px;
    }

    &__mailto-link,
    &__selected-phone {
      padding-right: 26px;
      color: $text-color--grey;
      font-size: 18px;
      font-family: 'Hoves-Regular';
    }
  }
</style>
