<template>
  <div
    id="header"
    class="header-wrapper"
    data-testid="test-header-wrapper"
  >
    <header
      ref="header"
      data-testid="test-header"
      :class="{
        'is-transparent-bg': !isActiveMobileMenu && isTransparentBG && isCasePage,
      }"
      class="header"
    >
      <div
        id="header-container"
        class="container"
      >
        <div class="row">
          <div class="header__left-nav_bar col">
            <NuxtLink
              to="/"
              class="header__logo-icon"
            >
              <HeaderLogo
                :is-show-text="logoTextIsActive"
                class="header__header-logo"
              />
            </NuxtLink>
            <nav class="header__header-routes_links">
              <NuxtLink
                v-for="{ title, link, exact } in navigation"
                :key="link"
                :exact="exact"
                class="header__navigation-link"
                data-testid="test-navigation-link"
                :to="link"
                @click.native="goToTopPage"
              >
                {{ title }}
              </NuxtLink>
            </nav>
            <!-- Burget btn -->
            <div
              class="header__burger"
              data-testid="test-burger"
              @click="toggleMobileMenu"
            >
              <svg
                v-if="isActiveMobileMenu"
                class="header__burger--close"
                data-testid="test-burger--close"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.807613 19.1924L19.1924 0.807623M19.1914 19.1924L0.806641 0.807617"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-else
                class="header__burger--open"
                width="30"
                height="10"
                viewBox="0 0 30 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H30V1H0V0Z"
                  fill="#F5F7F9"
                />
                <path
                  d="M0 9H30V10H0V9Z"
                  fill="#F5F7F9"
                />
              </svg>
            </div>
            <!-- END Burget btn -->
          </div>
          <div class="header__right-content col-auto">
            <button
              v-if="isBlogPage"
              class="header__search-btn"
              @click="searchActive = true"
            >
              <img
                src="@/assets/img/common/magnify--white.svg"
                width="16"
                height="18"
                alt="Magnify"
              >
            </button>
            <div class="header__phone-wrapper">
              <!-- Flag uk -->
              <img
                width="19"
                height="14"
                src="@/assets/img/Home/flags/uk.svg"
                class="header__phone-flag"
                alt="United Kingdom"
              >
              <a
                class="header__header-phone"
                href="tel:+442039848555"
              >+44 20 3984 8555</a>
            </div>
            <UIModalTriggerButton
              label="Contact me"
              color="red"
              @click="$refs.modalContactMe.show()"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile header -->
    <HeaderMobile
      v-if="isActiveMobileMenu"
      @changed-page="onChangePage"
      @open-modal="$refs.modalContactMe.show()"
    />
    <!-- END Mobile header -->

    <transition name="slide-fade">
      <ModalSearch
        v-if="searchActive"
        @on-close="searchActive = false"
      />
    </transition>
    <!-- this id should be unique, because it used for google analytics -->
    <ModalContactMe
      id="contact-me-modal"
      ref="modalContactMe"
      :location="'\'Contact me\' button, header component'"
    />
  </div>
</template>

<script>
import scrollOnBody from '@/mixins/scrollOnBody'
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'
import HeaderMobile from '@/components/core/Header/HeaderMobile'
import HeaderLogo from '@/components/core/Header/HeaderLogo'
import ModalSearch from '@/components/core/modals/ModalSearch'
import { headerNavigation as navigation } from '@/data/navigation'

export default {
  name: 'MainHeader',
  components: {
    UIModalTriggerButton,
    ModalContactMe: () => import('@/components/core/modals/ModalContactMe'),
    HeaderMobile,
    HeaderLogo,
    ModalSearch,
  },

  mixins: [scrollOnBody],

  data() {
    return {
      navigation,
      showLogoText: true,
      isActiveMobileMenu: false,
      isCasePage: false,
      isTransparentBG: true,
      searchActive: false,
    }
  },

  computed: {
    logoTextIsActive() {
      if (this.$nuxt.$route.name === 'delivery-models') return false
      return this.showLogoText
    },

    isBlogPage() {
      return this.$nuxt.$route.path.includes('/blog')
    },
  },

  watch: {
    $route() {
      this.setDefaultStateForHeader()
    },

    searchActive(opened) {
      if (opened) {
        this.disableScrollOnBody()
      } else {
        setTimeout(() => {
          this.enableScrollOnBody()
        }, 300)
      }
    },
  },

  created() {
    this.setDefaultStateForHeader()
  },

  mounted() {
    this.addEventListeners()
    this.setStylesForHeader()
  },

  beforeDestroy() {
    this.removeEventListeners()
  },

  methods: {
    // Base methods
    goToTopPage() {
      window.scrollTo(0, 0)
    },

    onChangePage() {
      this.isActiveMobileMenu = false
      this.enableScrollOnBody()
    },

    setDefaultStateForHeader() {
      this.isCasePage = this.$nuxt.$route.name && this.$nuxt.$route.name.includes('case-studies-')
    },

    changeLogoState(scrollTop) {
      this.showLogoText = Boolean(scrollTop < 10)
    },

    handleMobileMenuScroll(e) {
      e.stopImmediatePropagation()
      this.changeLogoState(this.mobileHeaderScrollbar.scrollTop)
    },

    toggleMobileMenu() {
      this.isActiveMobileMenu = !this.isActiveMobileMenu
      if (this.isActiveMobileMenu) {
        this.disableScrollOnBody()
        this.$nextTick(() => {
          this.mobileHeaderScrollbar = document.getElementById('mobile-header-scrollbar')
          this.mobileHeaderScrollbar.addEventListener('scroll', this.handleMobileMenuScroll)
          this.mobileHeaderScrollbar.addEventListener('touchmove', this.handleMobileMenuScroll)
        })
      } else {
        this.enableScrollOnBody()
        this.mobileHeaderScrollbar.removeEventListener('scroll', this.handleMobileMenuScroll)
        this.mobileHeaderScrollbar.removeEventListener('touchmove', this.handleMobileMenuScroll)
      }
    },

    setStylesForHeader() {
      const scrollTop = window.scrollY
      const area = document.querySelector('#case-header')
      const headerHeight = this.$refs.header.clientHeight
      const earlyStartBGChange = 30 // For an earlier start change background header

      if (!area) return

      const areaHeight = (area.offsetTop + area.offsetHeight) - headerHeight
      // const isAfterTopPointSection = scrollTop >= area.offsetTop // After Top point of the section
      const isBeforeBottomPointSection = scrollTop <= areaHeight - earlyStartBGChange // Before Bottom point of the section

      this.isTransparentBG = isBeforeBottomPointSection
      this.showLogoText = isBeforeBottomPointSection
    },

    scrollHandler() {
      if (this.isCasePage) {
        this.setStylesForHeader()
      } else {
        this.changeLogoState(window.pageYOffset)
      }
    },

    addEventListeners() {
      window.addEventListener('scroll', this.scrollHandler)
    },

    removeEventListeners() {
      window.removeEventListener('scroll', this.scrollHandler)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.header {
  width: 100%;
  height: 40px;
  padding: 11px 0;
  z-index: 3;
  background-color: $bgcolor--black;

  &-wrapper {
    position: sticky;
    top: 0;
    z-index: 10;
  }

  &__burger {
    display: none;
    position: absolute;
    top: 0;
    right: 25px;
    padding: 11px 14px;
    z-index: 3;

    &--close {
      width: 22px;
      height: 22px;
      margin-top: 3px;
      margin-right: 3px;
    }
  }

  &__logo-icon {
    z-index: 3;
  }

  &__search-btn {
    width: auto !important;
    height: auto !important;
    background-color: transparent;
    border: 0;
    margin-bottom: 22px !important;
    margin-right: 18px;
    padding: 10px;
    cursor: pointer;

    @media screen and (max-width: 1160px) {
      margin-right: 10px;
    }

    img {
      width: 16px;
      height: 18px;
    }
  }

  &__header-logo {
    width: 34px;
    height: 58px;
    margin: -3px -33px 0 -65px;
  }

  &__left-nav_bar {
    padding-right: 0;
  }

  &__right-content {
    padding-left: 0;
  }

  &__left-nav_bar,
  &__right-content {
    display: flex;
    align-items: center;
  }

  &__right-content {
    justify-content: flex-end;
    position: relative;
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
    @include font('Inter', 16px, 400);
    text-decoration: none;
    letter-spacing: -0.02em;
  }

  &__navigation-link {
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
    &::after {
      @include font('Inter', 17px, 400);
      content: '↓';
      color: transparent;
    }
    @media screen and (max-width: 1280px) {
      margin-right: 10px;
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

    @media screen and (max-width: 1180px) {
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

.is-transparent-bg {
  background-color: transparent;
}
// ------------ END Overlay styles ------------- //
.mobile-menu_is-open {
  width: 100%;
  height: 100%;
  position: fixed;
  padding: initial;
  z-index: 999;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-300px);
  opacity: 0;
}

@media screen and (max-width: 1120px) {
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
      position: initial;

      > * {
        display: none;
      }

      .header__search-btn {
        display: block;
        margin: 0;
        position: absolute;
        left: auto;
        right: 85px;
        top: 4px;
        z-index: 3;
      }
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

    .header__search-btn {
      right: 58px;
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
