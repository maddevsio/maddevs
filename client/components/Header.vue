<template>
  <div class="header-wrapper" id="header">
    <div class="overlay" v-if="headerTransparent" ref="overlay"></div>
    <header ref="header" class="header" :class="{'header-transparent': headerTransparent}">
      <div class="container" ref="headerContainer">
        <div class="row">
          <div class="header__left-nav_bar col-xl-6 col-lg-7">
            <router-link :to="`/`" class="header__logo-icon">
              <headerLogo class="header__header-logo" :isCasePage="isCasePage"/>
            </router-link>
            <nav class="header__header-routes_links">
              <router-link @click.native="goToTopPage" exact to="/" class="header__navigation-link">About</router-link>
              <router-link @click.native="goToTopPage" to="/services/" class="header__navigation-link">Services</router-link>
              <router-link @click.native="goToTopPage" to="/projects/" class="header__navigation-link">Projects</router-link>
              <router-link @click.native="goToTopPage" to="/careers/" class="header__navigation-link">Careers</router-link>
              <router-link @click.native="goToTopPage" to="/blog/" class="header__navigation-link header__navigation-link-blog">Blog</router-link>
            </nav>
            <!-- Burget btn -->
            <div class="header__burger" @click="isActiveMobileMenu = !isActiveMobileMenu">
              <svg v-if="isActiveMobileMenu" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.807613 19.1924L19.1924 0.807623M19.1914 19.1924L0.806641 0.807617" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H30V1H0V0Z" fill="#F5F7F9"/>
                <path d="M0 9H30V10H0V9Z" fill="#F5F7F9"/>
              </svg>
            </div>
            <!-- END Burget btn -->
          </div>
          <div class="header__right-content col-xl-6 col-lg-5">
            <div class="header__phone-wrapper">

              <!-- Flag uk -->
              <svg class="header__phone-flag" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M0 0H18V14H0V0Z" fill="#41479B"/>
                  <path d="M18 12.1771L11.3437 7.00001L18 1.82292V0H15.6563L9 5.17709L2.34375 0H0V1.82292L6.65625 7.00001L0 12.1771V14H2.34378L9 8.82293L15.6562 14H18V12.1771Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.90273e-05 0L0 8.16177e-05V0.729299L8.06248 7.00013L0 13.271V14H0.937653L8.99998 7.72929L17.0623 14H18.0001L18.3375 13.5335L9.93748 7.00013L18.3375 0.46678L17.9999 0H17.0626L8.99998 6.27096L0.93733 0H5.90273e-05Z" fill="#DC251C"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 4.66667V0H11.25V4.66667H18V9.33333H11.25V14H6.75V9.33333H0V4.66667H6.75Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 5.83333V0H10.125V5.83333H18V8.16667H10.125V14H7.875V8.16667H0V5.83333H7.875Z" fill="#DC251C"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <a class="header__header-phone" href="tel:+442039848555">+44 20 3984 8555</a>
            </div>
            <UIButtonModalTrigger
              :buttonInnerText="buttonInnerText"
              :isRed="true"
              @onClick="$refs.contactMeModal.show()"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile header -->
    <mobileHeader
      v-if="isActiveMobileMenu"
      @changed-page="isActiveMobileMenu = false"
      @open-modal="$refs.contactMeModal.show()"
    />
    <!-- END Mobile header -->

    <Modal ref="contactMeModal">
      <contactMeModal />
    </Modal>
  </div>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';
import mobileHeader from '@/components/Header/mobile-header';
import headerLogo from '@/components/svg/headerLogo';
import Modal from '@/containers/Modal';

export default {
  name: 'main-header',
  components: {
    UIButtonModalTrigger,
    contactMeModal: () => import('@/components/Modals/contact-me-modal'),
    mobileHeader,
    headerLogo,
    Modal
  },
  data() {
    return {
      buttonInnerText: 'Contact me',
      selectedPhone: null,
      modalWindowName: 'contact-me-modal',
      headerTransparent: false,
      scrollTop: null,
      isCasePage: false,
      caseMoreButton: null,
      caseHeader: null,
      logoText: null,
      caseFirstSection: null,
      caseRoot: null,
      isActiveMobileMenu: false
    };
  },
  created() {
    this.setHeaderState();
  },
  mounted() {
    if(this.isCasePage) {
      this.caseHeader = document.getElementsByClassName('case_header')[0];
      this.logoText = document.getElementsByClassName('header-logo-text')[0];

      if (!this.$nuxt.$route.path.includes('/godee')) { // На данный момент верстка главныйх экранов в кейсах отличаеться, и поэтому пришлось через условия разделить логику работы хедера в кейсах 
        this.caseMoreButton = document.getElementsByClassName('case_more__button')[0];
        this.getScrollTop();
        window.addEventListener('scroll', () => this.scrollHandler());
      } else if(this.$nuxt.$route.path.includes('/godee')) {
        this.caseFirstSection = document.getElementsByClassName('case_first-section')[0];
        this.caseRoot = document.getElementsByClassName('main')[0];
        this.caseRoot.addEventListener('scroll', () => this.scrollHandlerGodeeCase());
        this.resizeHandler();
        window.addEventListener('resize', () => this.resizeHandler());
      }
    }
  },
  watch: {
    '$route'() {
      this.setHeaderState();
    }
  },
  methods: {
    setHeaderState() { 
      if (this.$nuxt.$route.path.includes('/case-studies/')) {
        this.headerTransparent = true;
        this.isCasePage = true;
      } else {
        this.headerTransparent = false;
        this.isCasePage = false;
      }
    },
    goToTopPage() {
      window.scrollTo(0, 0);
    },
    getScrollTop() {
      this.scrollTop = this.caseMoreButton.getBoundingClientRect().top - this.$refs.headerContainer.offsetHeight;
    },
    scrollHandler() {
      this.setStylesForHeader();
    },
    scrollHandlerGodeeCase() {
      this.setStylesForHeaderInGoDeeCase();
    },
    setStylesForHeader() { // От этой логики в скором времени можно будет избавиться, сейчас это костыль, так как не все хедеры в кейсах переверстаны под новый формат
      if(this.isCasePage && window.innerWidth > 991) {
        const opacity = 1.6 - (this.$refs.overlay.offsetHeight - (window.scrollY - this.caseHeader.getBoundingClientRect().height + this.caseMoreButton.getBoundingClientRect().height) - this.$refs.headerContainer.offsetHeight) / this.$refs.overlay.offsetHeight;
        const opacityTextLogo = 0.9 - (this.$refs.overlay.offsetHeight - this.caseMoreButton.getBoundingClientRect().top + this.caseMoreButton.getBoundingClientRect().height) / this.$refs.overlay.offsetHeight;
        this.$refs.overlay.style.opacity = opacity;
        this.logoText.style.opacity = opacityTextLogo;
      } else if(this.isCasePage && window.innerWidth < 991) {
        const opacity = 1.7 - (this.$refs.overlay.offsetHeight - (window.scrollY - this.caseHeader.getBoundingClientRect().height + this.caseMoreButton.getBoundingClientRect().height) - 60) / this.$refs.overlay.offsetHeight;
        this.$refs.overlay.style.opacity = opacity;
      }
    },
    setStylesForHeaderInGoDeeCase() {
      if(this.isCasePage && window.innerWidth > 991) {
        this.$refs.overlay.style.opacity = 2 - (this.$refs.overlay.offsetHeight - (this.caseRoot.scrollTop - this.caseHeader.getBoundingClientRect().height) - this.$refs.headerContainer.offsetHeight) / this.$refs.overlay.offsetHeight;
        this.logoText.style.opacity = -1 - (this.$refs.overlay.offsetHeight - this.caseFirstSection.getBoundingClientRect().top) / this.$refs.overlay.offsetHeight;
      } else if (this.isCasePage && window.innerWidth < 991) {
        this.$refs.overlay.style.opacity = 3 - (this.$refs.overlay.offsetHeight - (this.caseRoot.scrollTop - this.caseHeader.getBoundingClientRect().height) - this.$refs.headerContainer.offsetHeight) / this.$refs.overlay.offsetHeight; // Цифры 1 или 2 регулируют старт затемнения, чем больше цифра тем раньше начнеться затемнение, с тектом для логотипа работает в обратную сторону
      }
    },
    resizeHandler() {
      let scrollBarWidth = this.caseRoot.offsetWidth - this.caseRoot.clientWidth;
      if(window.innerWidth > 991) {
        this.$refs.header.style.width = `calc(100% - ${scrollBarWidth}px)` || '100%';
        this.$refs.overlay.style.width = `calc(100% - ${scrollBarWidth}px)` || '100%';
      } else {
        this.$refs.header.style.width = '100%';
        this.$refs.overlay.style.width = '100%';
      }
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
    z-index: 3;
    background-color: $bgcolor--black;

    &__burger {
      display: none;
      position: fixed;
      top: 0;
      right: 25px;
      padding: 10px;
    }

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

    &__phone-wrapper,
    &__header-routes_links,
    button {
      margin-bottom: 29px;
    }

    button {
      width: 132px;
      height: 39px;
      border-radius: 4px;
      border-color: $text-color--red-opacity;
    }

    &__navigation-link,
    &__header-phone {
      color: $text-color--white;
    }

    &__navigation-link,
    &__header-phone,
    button {
      font-size: 16px;
      font-family: 'Poppins-Regular', sans-serif;
      text-decoration: none;
      letter-spacing: -0.02em;
    }

    &__navigation-link {
      margin-right: 15px;

      &::after {
        content: '↓';
        font-size: 17px;
        font-family: 'Poppins-Regular', sans-serif;
        color: transparent;
      }
    }

    .nuxt-link-active {
      color: $text-color--red;

      &::after {
        color: $text-color--red;
      }
    }

    &__phone-wrapper {
      display: flex;
      align-items: center;
      margin-right: 40px;

      @media screen and (max-width: 1366px) {
        margin-right: 49px;
      }

      @media screen and (max-width: 1280px) {
        margin-right: 33px;
      }

      @media screen and (max-width: 1024px) {
        margin-right: 20px;
      }
    }

    &__header-phone {
      display: flex;
      align-items: center;
      position: relative;
      margin-left: 7px;
      cursor: pointer;

      img {
        position: absolute;
        top: 4px;
        left: 0;
      }
    }

    &__phone-flag {
      display: block;
      width: 18px;
      height: 14px;
    }
  }

  .header-transparent {
    background-color: transparent !important;
  }

  .overlay {
    width: 100%;
    height: 40px;
    padding: 11px 0;
    position: fixed;
    z-index: 2;
    background-color: $bgcolor--black;
    opacity: 0;
    transition: opacity 0.6s;

    @media screen and (max-width: 991px) {
      height: 48px;
      padding: 0;
    }
  }

  .header-default {
    background-color: $bgcolor--black !important;

    &::before {
      opacity: 0;
    }
  }

  .mobile-menu_is-open {
    width: 100%;
    height: 100%;
    position: fixed;
    padding: initial;
    z-index: 999;
  }

  @media screen and (max-width: 991px) {
    .header {
      max-height: 26px;

      &__burger {
        display: block;
      }

      &__left-nav_bar {
        margin-top: 0;
      }

      &__header-routes_links {
        display: none;
      }

      &__right-content {
        display: none;
      }

      &__header-logo {
        width: 28px;
        height: 49px;
        margin-top: 20px;
        margin-left: -55px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .header {
      &__burger {
        right: 10px;
      }

      &__header-logo {
        margin-left: -40px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .header {
      &__header-logo {
        margin-left: -25px;
      }
    }
  }

  @media screen and (max-width: 440px) {
    .header {
      &__header-logo {
        margin-left: 0;
      }
    }
  }
</style>
