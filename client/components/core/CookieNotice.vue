<template>
  <transition name="swipe">
    <div
      v-if="displayCookieNotice"
      class="cookie-notice"
    >
      <div class="cookie-notice__content">
        <div class="cookie-notice__message">
          This site uses cookies to provide you with a great user experience.
          By using Mad Devs you accept our use of cookies.
        </div>
        <UIButton
          class="cookie-notice__button"
          @click="acceptCookie"
        >
          ✓  I agree
        </UIButton>
      </div>
    </div>
  </transition>
</template>

<script>
import { loadState, saveState, LOCAL_STORAGE_KEYS } from '@/helpers/localStorage'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'CookieNotice',
  components: { UIButton },
  data() {
    return {
      displayCookieNotice: !loadState(LOCAL_STORAGE_KEYS.ACCEPT_COOKIE),
    }
  },

  methods: {
    acceptCookie() {
      this.displayCookieNotice = false
      saveState(true, LOCAL_STORAGE_KEYS.ACCEPT_COOKIE)
    },
  },
}
</script>

<style lang="scss" scoped>
.cookie-notice {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000000000;
  background-color: #101113;
  padding: 11px 20px;
  @media screen and (max-width: 400px) {
    padding: 20px;
  }
  &__content {
    max-width: 1240px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 400px) {
      align-items: flex-start;
    }
  }

  &__message {
    color: #fff;
    margin-right: 50px;
    @include font('Inter', 14px, 400);
    @media screen and (max-width: 400px) {
      margin-right: 10px;
      @include font('Inter', 12px, 400);
    }
  }

  &__button {
    flex-basis: 129px;
    flex-shrink: 0;
    padding: 7px 20px;
    @include font('Inter', 14px, 400);
    line-height: 23px;
    @media screen and (max-width: 400px) {
      flex-basis: 107px;
    }
  }
}

.swipe-enter-active, .swipe-leave-active {
  transition: all 1.5s;
}
.swipe-enter, .swipe-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(300px);
}
</style>
