<template>
  <div class="header-wrapper">
    <header ref="header" class="header">
      <div class="container row">
        <div class="header__left-nav_bar col-xl-6 col-lg-6">
          <router-link :to="`/`" class="header__logo-icon">
            <headerLogo class="header__header-logo" :headerLogoTextDisplayState="headerLogoTextDisplayState"/>
          </router-link>
          <nav class="header__header-routes_links">
            <router-link @click.native="goToTopPage" exact to="/" class="header__navigation-link">About</router-link>
            <router-link @click.native="goToTopPage" to="/services" class="header__navigation-link">Services</router-link>
            <router-link @click.native="goToTopPage" to="/projects" class="header__navigation-link">Projects</router-link>
            <router-link @click.native="goToTopPage" to="/careers" class="header__navigation-link">Careers</router-link>
            <a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer" class="header__navigation-link">Blog</a>
          </nav>
        </div>
        <div class="header__right-content col-xl-6 col-lg-6">
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
          <UIButtonModalTrigger
            :buttonInnerText="buttonInnerText"
            :modalWindowName="modalWindowName"
            :isRed="true"
            class="header__contact-button"
          />
        </div>
      </div>
    </header>
    <mobileHeader />
  </div>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';
import mobileHeader from '@/components/Header/mobile-header';
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
    this.selectedPhone = this.phones[0];
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
    goToTopPage() {
      window.scrollTo(0, 0);
    },
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
    height: 40px;
    padding: 11px 0;
    position: fixed;
    z-index: 2;
    background-color: $bgcolor--black;

    &__header-logo {
      width: 34px;
      height: 58px;
      margin: 5px -33px 0 -65px;
    }

    &__left-nav_bar,
    &__right-content {
      display: flex;
      align-items: center;
    }

    &__right-content {
      justify-content: flex-end;
    }

    &__flag {
      height: 14px;
      width: 18px;
      background-repeat: no-repeat;
      margin-right: 10px;
      background-size: contain;
      display: inline-block;

      &--united-states {
        background-image: url(../assets/img/Flags/united-states.svg);
      }

      &--united-kingdom {
        background-image: url(../assets/img/Flags/united-kingdom.svg);
      }
    }

    &__phones-dropdown_wrap,
    &__contact-button,
    &__header-routes_links {
      margin-bottom: 29px;
    }

    &__contact-button {
      width: 132px;
      height: 39px;
      border-radius: 4px;
    }

    &__navigation-link,
    &__selected-phone,
    &__phone-item {
      color: $text-color--light-white;
    }

    &__navigation-link,
    &__selected-phone,
    &__phone-item,
    &__contact-button {
      font-size: 16px;
      font-family: 'Poppins-Regular';
      text-decoration: none;
      letter-spacing: -0.02em;
    }

    &__navigation-link {
      margin-right: 10px;

      &::after {
        content: '↓';
        font-size: 17px;
        font-family: 'Hoves-Regular';
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

    &__phones-dropdown_wrap {
      min-width: 200px;
      margin-left: 12px;
      margin-right: 88px;
      background: url('../assets/img/Header/dropdown-arrow.svg') no-repeat;
      background-position-y: 9px;
      background-position-x: 170px;

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
      padding: 0 10px 2px;
      background-color: $bgcolor--black;
    }

    &__selected-phone,
    &__phone-item {
      position: relative;
      cursor: pointer;

      img {
        position: absolute;
        left: 0;
      }
    }

    &__selected-phone {
      display: flex;
      align-items: center;
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
  }

  .mobile-menu_is-open {
    width: 100%;
    height: 100%;
    position: fixed;
    padding: initial;
    z-index: 999;

    .container {
      height: 100vh;
      overflow: scroll;
    }
  }

  @media only screen and (max-width: 1366px) {
    .header {
      &__phones-dropdown_wrap {
        margin-right: 63px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .header {
      &__phones-dropdown_wrap {
        margin-right: 33px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .header {
      &__phones-dropdown_wrap {
        margin-right: 0;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .header {
      display: none;
    }
  }
</style>
