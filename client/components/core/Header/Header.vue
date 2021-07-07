<template>
  <div
    id="header"
    class="header-wrapper"
    data-testid="test-header-wrapper"
    :class="{ 'is-transparent-bg': isTransparentBG && isCasePage }"
  >
    <div
      id="overlay"
      ref="overlay"
    />
    <header
      ref="header"
      data-testid="test-header"
      :class="{ transparent: isCasePage && !isActiveMobileMenu }"
      class="header"
    >
      <div
        id="header-container"
        class="container"
      >
        <div class="row">
          <div class="header__left-nav_bar col">
            <NuxtLink
              :to="`/`"
              class="header__logo-icon"
            >
              <HeaderLogo
                :is-show-text="logoTextIsActive"
                :is-case-page="isCasePage"
                :is-active-mobile-menu="isActiveMobileMenu"
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
      :enable-page-scroll="enablePageScroll"
      @changed-page="isActiveMobileMenu = false"
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
      return this.showLogoText && this.$nuxt.$route.name !== 'delivery-models'
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

  methods: {
    // Base methods
    goToTopPage() {
      window.scrollTo(0, 0)
    },

    enablePageScroll() {
      const scrollY = document.body.style.top || '0'
      document.body.classList.remove('scrollDisabled')
      document.documentElement.classList.remove('scrollDisabled')
      window.scrollTo(0, parseInt(scrollY, 10) * -1)
    },

    disablePageScroll() {
      const { scrollY } = window
      document.body.classList.add('scrollDisabled')
      document.documentElement.classList.add('scrollDisabled')
      document.body.style.top = `-${scrollY}px`
    },

    enableScrollOnBody() {
      document.body.style.top = 'auto'
      document.body.style.overflow = 'auto'
    },

    disableScrollOnBody() {
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.overflow = 'hidden'
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
        this.disablePageScroll()
        this.$nextTick(() => {
          this.mobileHeaderScrollbar = document.getElementById('mobile-header-scrollbar')
          this.mobileHeaderScrollbar.addEventListener('scroll', this.handleMobileMenuScroll)
          this.mobileHeaderScrollbar.addEventListener('touchmove', this.handleMobileMenuScroll)
        })
      } else {
        this.enablePageScroll()
        this.mobileHeaderScrollbar.removeEventListener('scroll', this.handleMobileMenuScroll)
        this.mobileHeaderScrollbar.removeEventListener('touchmove', this.handleMobileMenuScroll)
      }
    },

    setStylesForHeader() {
      const scrollTop = window.scrollY
      const area = document.querySelector('#case-header')
      if (!area) return

      const areaHeight = (area.offsetTop + area.offsetHeight) - (this.$refs.overlay && this.$refs.overlay.offsetHeight)
      // const isAfterTopPointSection = scrollTop >= area.offsetTop // After Top point of the section
      const isBeforeBottomPointSection = scrollTop <= areaHeight // Before Bottom point of the section

      this.isTransparentBG = isBeforeBottomPointSection
    },

    scrollHandler() {
      if (this.$nuxt.$route.path.includes('/case-studies/')) this.setStylesForHeader()
      this.changeLogoState(window.pageYOffset)
    },

    addEventListeners() {
      window.addEventListener('scroll', this.scrollHandler)
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: $bgcolor--black;

  &__burger {
    display: none;
    position: fixed;
    top: 0;
    right: 25px;
    padding: 11px 14px;

    &--close {
      width: 22px;
      height: 22px;
      margin-top: 3px;
      margin-right: 3px;
    }
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

  &.transparent {
    background: transparent;
  }
}

// ------------ Overlay styles ------------- //
#overlay {
  width: 100%;
  height: 40px;
  padding: 11px 0;
  position: fixed;
  z-index: 2;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: $bgcolor--black;
    opacity: 1;
  }

  @media screen and (max-width: 1120px) {
    height: 48px;
    padding: 0;
  }
}

/deep/ #header-logo-text {
  opacity: 0;
  transform: translateY(-100px) translateX(5%) scale(0.9);
  transition: all 0.1s ease;
}

.is-transparent-bg {
  #overlay::before {
    transition: all 0.3s ease;
    height: 175px;
    background: $bgcolor--header-gradient;
    opacity: 0.3;
  }

  /deep/ #header-logo-text {
    opacity: 1;
    transform: none;
  }
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
        top: 2px;
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
