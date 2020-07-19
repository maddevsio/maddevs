<template>
  <div class="header-wrapper">
    <header ref="header" class="header">
      <div class="container">
        <div class="header__header-content_logo">
          <router-link :to="`/`" class="header__logo-icon">
            <headerLogo class="header__header-logo" :headerLogoTextDisplayState="headerLogoTextDisplayState"/>
          </router-link>
          <div class="header__header-content_wrap">
          <div class="header__left-nav_bar">
            <nav class="header__header-routes_links">
              <router-link exact to="/">About</router-link>
              <router-link to="/services">Services</router-link>
              <router-link to="/projects">Projects</router-link>
              <router-link to="/careers">Careers</router-link>
              <a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">Blog</a>
            </nav>
          </div>
          <div class="header__right-content">
            <div class="header__right-text_content">
              <div class="header__soc-links_wrap">
                <a
                  href="https://twitter.com/maddevsio"
                  target="_blank"
                  class="header-social-logo header-social-logo--twitter header__soc-link"/>
                <a
                  href="https://ru.linkedin.com/company/mad-devs"
                  target="_blank"
                  class="header-social-logo header-social-logo--lindekin header__soc-link"/>
                <a
                  href="https://www.facebook.com/maddevsllc"
                  target="_blank"
                  class="header-social-logo header-social-logo--facebook header__soc-link"/>
              </div>
              <div class="header__phones-dropdown_wrap" :id="selectedPhone.country">
                <a class="header__selected-phone" :href="`tel:${selectedPhone.phoneNumber}`">
                  <p :class="`header__flag header__flag--${selectedPhone.country}`" />
                  {{ selectedPhone.phoneNumber }}
                  <i class="header__phones-dropdown_arrow"/>
                </a>
                <div class="header__phones-list">
                  <a v-for="(phone, i) in phones" :key="i" class="header__phone-item" :href="`tel:${phone.phoneNumber}`" @click="selectedPhone = phone" v-show="phone != selectedPhone">
                    <p :class="`header__flag header__flag--${phone.country}`" />
                    {{ phone.phoneNumber }}
                  </a>
                </div>
              </div>
              <a href="mailto:team@maddevs.io" class="header__mailto-link">team@maddevs.io</a>
            </div>
          </div>
          </div>
          <UIButtonModalTrigger
            :buttonInnerText="buttonInnerText"
            :modalWindowName="modalWindowName"
            :isRed="true"
          />
        </div>
      </div>
    </header>
    <mobileHeader />
  </div>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';
import mobileHeader from '@/components/ui/mobile-header';
import headerLogo from '@/components/svg/headerLogo';

export default {
  name: 'main-header',
  components: {
    UIButtonModalTrigger,
    mobileHeader,
    headerLogo
  },
  data() {
    return {
      buttonInnerText: 'Contact me',
      phones: [
        {
          phoneNumber: '+44 20 3984 8555',
          country: 'united-kingdom'
        },
        {
          phoneNumber: '+1 833-MADDEVS',
          country: 'united-states'
        }
      ],
      selectedPhone: null,
      modalWindowName: 'contact-me-modal',
      headerLogoTextDisplayState: false
    };
  },
  created() {
    /**
     * Sets default value for selectedPhone
     * this.phones[1] is a United Kingdom number
    */
    this.selectedPhone = this.phones[1];
  },
  watch: {
    '$route'() {
      this.headerLogoTextDisplayState = false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if(window.pageYOffset >= 100)
        this.headerLogoTextDisplayState = true;
      else
        this.headerLogoTextDisplayState = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .header {
    width: 100%;
    height: 2.5vw;
    padding: 0.8vw 0;
    position: fixed;
    z-index: 2;
    background-color: #000;

    button {
      padding: 0 24px;
      height: 2.4vw;
      margin-right: -96px;
      font-size: 1.1vw;
      line-height: 1.1vw;
      white-space: nowrap;
    }

    &__header-logo {
      width: 2.2vw;
      height: auto;
    }

    &__header-content_wrap {
      display: flex;
      width: 100%;
      justify-content: space-between;
      height: 2.4vw;
      align-items: center;
    }

    &__header-content_logo {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    &__header-routes_links {
      position: relative;
      padding-left: 55px;

      a {
        color: $text-color--grey;
        text-decoration: none;
        margin-right: 2vw;
        font-size: 1vw;
        font-family: 'Hoves-Regular';

        &::after {
          content: '↓';
          color: transparent;
        }

        &:last-child {
          &::after {
            content: '';
          }
        }
      }

      .nuxt-link-active {
        color: $text-color--red;

        &::after {
          color: $text-color--red;
        }
      }
    }

    &__left-nav_bar,
    &__right-content,
    &__right-text_content {
      display: flex;
      align-items: center;
    }

    &__right-text_content {
      display: flex;
    }

    &__soc-links_wrap {
      padding-right: 26px;
      display: flex;
      width: 6vw;
      justify-content: space-between;
    }

    &__soc-link {
      padding-right: 5px;
    }

    &__phones-dropdown_arrow {
      display: inline-block;
      height: 0.4vw;
      width: 0.6vw;
      margin-left: 0.3vw;
      background-image: url('../assets/img/Header/dropdown-arrow.svg');
      background-size: cover;
    }
    &__phones-dropdown_wrap {
      min-width: 200px;
      padding-top: 1px;

      &:hover {
        .header__phones-list {
          display: flex;
          flex-direction: column;
        }
      }
    }

    &__phones-list {
      display: none;
      position: absolute;
      margin-left: -10px;
      padding: 0 10px 10px;
      background-color: #000;
    }

    &__mailto-link,
    &__selected-phone,
    &__phone-item {
      padding-right: 26px;
      color: $text-color--grey;
      font-size: 1vw;
      font-family: 'Hoves-Regular';
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    &__selected-phone,
    &__phone-item {
      position: relative;
      padding-left: 25px;
      padding-right: 2.5vw;
      cursor: pointer;

      img {
        position: absolute;
        left: 0;
      }
    }

    &__selected-phone {
      img {
        top: 4px;
      }
    }

    &__phone-item {
      padding-top: 17px;

      img {
        top: 20px;
      }
    }

    &__logo-icon {
      margin-left: -96px;
    }

    &-social-logo {
      width: 1.5vw;
      height: 1.5vw;
      display: inline-block;
      background-repeat: no-repeat;
      background-size: contain;
      overflow: hidden;

      &--facebook {
        background-image: url(../assets/img/Header/facebook-icon.svg);
      }

      &--twitter {
        background-image: url(../assets/img/Header/twitter-icon.svg);
      }

      &--lindekin {
        background-image: url(../assets/img/Header/lindekin-icon.svg);
      }
    }
    &__flag {
      height: 0.8vw;
      width: 1vw;
      background-repeat: no-repeat;
      margin: 0 10px 0 0;
      background-size: contain;

      &--united-states {
        background-image: url(../assets/img/Flags/united-states.svg);
      }

      &--united-kingdom {
        background-image: url(../assets/img/Flags/united-kingdom.svg);
      }
    }
  }

  .mobile-menu_is-open {
    width: 100%;
    height: 100%;
    position: fixed;
    padding: initial;
    z-index: 999;

    .container {
      height: 100vw;
      overflow: scroll;
    }
  }

  @media only screen and (max-width: 1590px) {
    .header {
      &__logo-icon {
        margin-left: -80px;
      }

      button {
        margin-right: -80px;
      }

      &__header-routes_links {
        padding-left: 33px;
      }
    }
  }

  @media only screen and (max-width: 1320px) {
    .header {
      &__header-routes_links {
        padding-left: 25px;
      }

      &__mailto-link,
      &__selected-phone,
      &__phone-item,
      &__soc-links_wrap {
        padding-right: 15px;
      }

      &__routes_links {
        a {
          margin-right: 0;
        }
      }

      &__logo-icon {
        margin-left: -68px;
      }

      button {
        margin-right: -68px;
      }
    }
  }

  @media only screen and (max-width: 1240px) {
    .header {
      &__header-routes_links {
        padding-top: 10px;

        a {
          margin-right: 5px;
        }
      }

       &__selected-phone {
        img {
          top: 2px;
        }
      }

      &__phone-item {
        img {
          top: 19px;
        }
      }
    }
  }

  @media only screen and (max-width: 1140px) {
    .header {
      &__logo-icon {
        margin-left: -80px;
      }

      button {
        margin-right: -80px;
      }
    }
  }

  @media only screen and (max-width: 1120px) {
    .header {
      &__mailto-link,
      &__selected-phone,
      &__phone-item,
      &__soc-links_wrap {
        padding-right: 5px;
      }

      &__header-routes_links {
        a {
          margin-right: 0;
        }
      }

      &__mailto-link {
        padding-top: 1px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .header {
      display: none;
    }
  }
</style>
