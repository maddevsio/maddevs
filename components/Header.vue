<template>
  <header class="header" :class="{'mobile-menu_is-open': mobileMenuIsOpen, 'white': headerIsWhite}">
    <div class="container">
      <div class="header__header-content_wrap">
        <div class="header__left-nav_bar">
          <router-link :to="`/`">
            <img src="@/assets/img/Header/logo_black.svg" alt="Logotype" class="header__header-logo" v-if="headerIsWhite">
            <img src="@/assets/img/common/logo.svg" alt="Logotype" class="header__header-logo" v-else>
          </router-link>
          <nav class="header__header-routes_links">
            <router-link to="/">About</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/careers" @click.native="listenCareersLinkClick">Careers</router-link>
            <a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">Blog</a>
          </nav>
        </div>
        <div class="header__right-content">
          <div class="header__right-text_content">
            <div class="header__soc-links_wrap">
              <a href="https://twitter.com/maddevsio" target="_blank" class="header__twitter-link header__soc-link">
                <img src="@/assets/img/Header/twitter-icon.svg" alt="Twitter">
              </a>
              <a href="https://ru.linkedin.com/company/mad-devs" target="_blank" class="header__lindekin-link header__soc-link">
                <img src="@/assets/img/Header/lindekin-icon.svg" alt="Lindekin">
              </a>
              <a href="https://www.facebook.com/maddevsio" target="_blank" class="header__facebook-link header__soc-link">
                <img src="@/assets/img/Header/facebook-icon.svg" alt="Facebook">
              </a>
            </div>
            <div class="header__phones-dropdown_wrap">
              <a class="header__selected-phone" :href="`tel:${selectedPhone.phoneNumber}`">
                <img :src="require(`@/assets/img/Flags/${selectedPhone.country}.svg`)" :alt="`${selectedPhone.country}`" />
                {{ selectedPhone.phoneNumber }}
              </a>
              <div class="header__phones-list">
                <a v-for="(phone, i) in phones" :key="i" class="header__phone-item" :href="`tel:${phone.phoneNumber}`" @click="selectedPhone = phone">
                  <img :src="require(`@/assets/img/Flags/${phone.country}.svg`)" :alt="`${phone.country}`" />
                  {{ phone.phoneNumber }}
                </a>
              </div>
            </div>
            <a href="mailto:team@maddevs.io" class="header__mailto-link">team@maddevs.io</a>
          </div>
          <buttonTrigger :buttonInnerText="buttonInnerText" :modalWindowName="modalWindowName" class="red-text-and-border" />
        </div>
      </div>
      <mobileMenu v-on:getMobileMenuState="getMobileMenuState($event)"/>
    </div>
  </header>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';
import mobileMenu from '@/components/ui/mobile-menu';

export default {
  name: 'main-header',
  components: {
    buttonTrigger,
    mobileMenu
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
          phoneNumber: '+44 20 3984 8555',
          country: 'poland'
        },
        {
          phoneNumber: '+44 20 3984 8555',
          country: 'russia'
        },
        {
          phoneNumber: '+44 20 3984 8555',
          country: 'belarus'
        }
      ],
      selectedPhone: {
        phoneNumber: '+44 20 3984 8555',
        country: 'united-kingdom'
      },
      modalWindowName: 'contact-me-modal',
      mobileMenuIsOpen: false,
      headerIsWhite: false
    };
  },
  mounted () {
    window.addEventListener('scroll', this.mainPageHandleScroll);
    window.addEventListener('scroll', this.servicesPageHandleScroll);
    window.addEventListener('scroll', this.projectsPageHandleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.mainPageHandleScroll);
    window.removeEventListener('scroll', this.servicesPageHandleScroll);
    window.removeEventListener('scroll', this.projectsPageHandleScroll);
  },
  methods: {
    getMobileMenuState(mobileMenuDisplayState) {
      this.mobileMenuIsOpen = mobileMenuDisplayState;
    },
    mainPageHandleScroll() {
      if ($nuxt.$route.name === 'index') {
        const customerTestimonials = document.getElementById('customer-testimonials');
        const meetOurExperts = document.getElementById('meet-our-experts');
        const whyUs = document.getElementById('why-us');

        if (
          customerTestimonials.getBoundingClientRect().top <= 0 && 
          customerTestimonials.getBoundingClientRect().bottom >= 0 ||
          meetOurExperts.getBoundingClientRect().top <= 0 && 
          meetOurExperts.getBoundingClientRect().bottom >= 0 ||
          whyUs.getBoundingClientRect().top <= 0 && 
          whyUs.getBoundingClientRect().bottom >= 0
        ) {
          this.headerIsWhite = true;
        } else {
          this.headerIsWhite = false;
        }
      }
    },
    servicesPageHandleScroll() {
      if ($nuxt.$route.name === 'services') {
        const infrastructureOptimisation = document.getElementById('infrastructure-optimisation');
        const itConsulting = document.getElementById('it-consulting');
  
        if (
          infrastructureOptimisation.getBoundingClientRect().top <= 0 && 
          infrastructureOptimisation.getBoundingClientRect().bottom >= 0 ||
          itConsulting.getBoundingClientRect().top <= 0 && 
          itConsulting.getBoundingClientRect().bottom >= 0
        ) {
          this.headerIsWhite = true;
        } else {
          this.headerIsWhite = false;
        }
      }
    },
    projectsPageHandleScroll() {
      if ($nuxt.$route.name === 'projects') {
        const openSource = document.getElementById('open-source');
  
        if (openSource.getBoundingClientRect().top <= 0 && openSource.getBoundingClientRect().bottom >= 0) {
          this.headerIsWhite = true;
        } else {
          this.headerIsWhite = false;
        }
      }
    },
    listenCareersLinkClick() {
      this.headerIsWhite = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .header {
    width: 100%;
    position: fixed;
    z-index: 2;
    padding-top: 144px;
    background: $header-gradient--black-transparent;

    button {
      width: 135px;
      height: 40px;
    }

    &__header-logo {
      width: 40px;
      height: 70px;
    }

    &__header-content_wrap {
      display: flex;
      justify-content: space-between;
      margin-top: -120px;
    }

    &__header-routes_links {
      position: relative;
      padding-top: 9px;
      padding-left: 55px;

      a {
        color: $text-color--grey;
        text-decoration: none;
        margin-right: 16px;
        font-size: 18px;
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

      .nuxt-link-exact-active {
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

    &__phones-dropdown_wrap {
      height: max-content;
      min-width: 200px;
      padding-top: 1px;
      background: url('../assets/img/Header/dropdown-arrow.svg') no-repeat;
      background-position-y: 9px;
      background-position-x: 174px;

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
    }

    &__mailto-link,
    &__selected-phone,
    &__phone-item {
      padding-right: 26px;
      color: $text-color--grey;
      font-size: 18px;
      font-family: 'Hoves-Regular';
      text-decoration: none;
    }

    &__selected-phone,
    &__phone-item {
      position: relative;
      padding-left: 25px;
      padding-right: 40px;
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
  }

  .white {
    background: $header-gradient--white-transparent;
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
    }
  }

  @media only screen and (max-width: 1240px) {
    .header {
      button,
      &__mailto-link,
      &__selected-phone,
      &__phone-item,
      &__routes_links,
      &__header-routes_links a {
        font-size: 16px;
      }

      &__header-routes_links {
        padding-top: 10px;

        a {
          margin-right: 5px;
        }
      }

      &__phones-dropdown_wrap {
        min-width: 183px;
        padding-top: 1px;
        background-position-x: 158px;
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

  @media only screen and (max-width: 1120px) {
    .header {
      button {
        width: 120px;
        height: 35px;
      }

      button,
      &__mailto-link,
      &__selected-phone,
      &__phone-item,
      &__routes_links,
      &__header-routes_links a {
        font-size: 15px;
      }

      &__mailto-link,
      &__selected-phone,
      &__phone-item,
      &__soc-links_wrap {
        padding-right: 10px;
      }

      &__header-routes_links {
        padding-top: 11px;

        a {
          margin-right: 0;
        }
      }

      &__phones-dropdown_wrap {
        min-width: 170px;
        padding-top: 2px;
        background-position-x: 150px;
      }

      &__mailto-link {
        padding-top: 1px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .header {
      position: initial;
      background-color: $bgcolor--black;

      &__header-content_wrap {
        display: none;
      }

      .mobile-menu {
        display: block;
      }
    }

    .mobile-menu_is-open {
      .mobile-menu {
        height: 100%;
        margin-top: 0;
        padding: 22px 0;
        box-sizing: border-box;
      }
    }
  }
</style>
