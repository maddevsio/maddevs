<template>
  <div class="header-wrapper">
    <header ref="header" class="header" :class="{'header-white': headerIsWhite}">
      <div class="header-container">
      <nuxt-link :prefetch="false" :to="`/`" class="header__logo-icon">
        <headerLogo class="header__header-logo" :headerLogoTextDisplayState="headerLogoTextDisplayState" :headerIsWhite="headerIsWhite"/>
      </nuxt-link>
      <div class="container">
        <div class="header__header-content_logo">
          <div class="header__header-content_wrap">
          <div class="header__left-nav_bar">
            <nav class="header__header-routes_links">
              <nuxt-link :prefetch="false" exact to="/">About</nuxt-link>
              <nuxt-link :prefetch="false" to="/services">Services</nuxt-link>
              <nuxt-link :prefetch="false" to="/projects">Projects</nuxt-link>
              <nuxt-link :prefetch="false" to="/careers">Careers</nuxt-link>
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
                  class="header-social-logo header-social-logo--linkedin header__soc-link"/>
                <a
                  href="https://www.facebook.com/maddevsllc"
                  target="_blank"
                  class="header-social-logo header-social-logo--facebook header__soc-link"/>
              </div>
              <div class="header__phones-dropdown_wrap" :id="selectedPhone.country">
                <a class="header__selected-phone" :href="`tel:${selectedPhone.phoneNumber}`">
                  <span :class="`header__flag header__flag--${selectedPhone.country}`" />
                  {{ selectedPhone.phoneNumber }}
                  <i class="header__phones-dropdown_arrow"/>
                </a>
                <div class="header__phones-list">
                  <a v-for="(phone, i) in phones" :key="i" class="header__phone-item" :href="`tel:${phone.phoneNumber}`" @click="selectedPhone = phone" v-show="phone != selectedPhone">
                    <span :class="`header__flag header__flag--${phone.country}`" />
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
        }
      ],
      selectedPhone: null,
      modalWindowName: 'contact-me-modal',
      headerLogoTextDisplayState: false,
      headerIsWhite: false
    };
  },
  created() {
    /**
     * Sets default value for selectedPhone
     * this.phones[1] is a United Kingdom number
    */
    this.selectedPhone = this.phones[0];

    if(this.$route.name === 'godee') {
      this.headerIsWhite = true;
    } else {
      this.headerIsWhite = false;
    }
  },
  watch: {
    '$route'() {
      this.headerLogoTextDisplayState = false;
      this.headerIsWhite = false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, {passive: true});
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
  @import '../assets/styles/get-vw';

  .header {
    width: 100%;
    padding: get-vw(15px) 0;
    position: fixed;
    z-index: 2;
    background-color: $bgcolor--black;

    &-container {
      display: flex;
      position: relative;

      .container {
        width: 100%;
      }
    }

    button {
      padding: 0 get-vw(24px);
      height: get-vw(38px);
      margin-right: get-vw(-92px);
      line-height: get-vw(23px);
      white-space: nowrap;
    }

    &__header-logo {
      width: get-vw(40px);
      height: get-vw(70px);
    }

    &__header-content_wrap {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    &__header-content_logo {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    &__header-routes_links {
      position: relative;

      a {
        color: $text-color--grey;
        text-decoration: none;
        margin-right: get-vw(30px);
        font-size: get-vw(18px);
        letter-spacing: get-vw(1px);
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
      display: flex;
      width: get-vw(90px);
      justify-content: space-between;
    }

    &__phones-list {
      display: none;
      position: absolute;
    }

    &__mailto-link,
    &__selected-phone,
    &__phone-item {
      padding-right: get-vw(36px);
      color: $text-color--grey;
      font-size: get-vw(18px);
      font-family: 'Hoves-Regular';
      text-decoration: none;
      display: flex;
      align-items: center;
      line-height: get-vw(1.23px);
    }

    &__selected-phone,
    &__phone-item {
      position: relative;
      padding-left: get-vw(26px);
      padding-right: get-vw(22px);
      cursor: pointer;
      letter-spacing: get-vw(1px);

      img {
        position: absolute;
        left: 0;
      }
    }

    &__logo-icon {
      position: absolute;
      left: 3vw;
    }

    &-social-logo {
      width: get-vw(22px);
      height: get-vw(22px);
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

      &--linkedin {
        background-image: url(../assets/img/Header/lindekin-icon.svg);
      }
    }
    &__flag {
      height: get-vw(14px);
      width: get-vw(18px);
      background-repeat: no-repeat;
      margin-right: get-vw(10px);
      background-size: contain;

      &--united-states {
        background-image: url(../assets/img/Flags/united-states.svg);
      }

      &--united-kingdom {
        background-image: url(../assets/img/Flags/united-kingdom.svg);
      }
    }
  }

  .header-white {
    background-color: $bgcolor--white;
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

  @media only screen and (max-width: 1024px) {
    .header {
      display: none;
    }
  }
</style>
