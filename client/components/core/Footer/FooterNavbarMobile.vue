<template>
  <div class="footer-navbar-mobile">
    <p class="footer-navbar-mobile__company-name">
      © Mad Devs - {{ currentYear }}
    </p>
    <div class="footer-navbar-mobile__nav-list">
      <NuxtLink
        v-for="item in navigation"
        :key="item.link"
        :to="item.link"
        target="_blank"
        class="footer-navbar-mobile__nav-link"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { footerNavigation as navigation } from '@/data/navigation'

export default {
  name: 'FooterNavbarMobile',
  data() {
    return {
      navigation,
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
.footer-navbar-mobile {
  margin-top: 40px;
  text-align: center;

  &__nav-list {
    display: flex;
    flex-direction: column;
  }

  &__nav-link,
  &__company-name {
    font-size: 16px;
    color: $text-color--grey;
    letter-spacing: -0.02em;
    text-decoration: none;
  }

  @media only screen and (max-width: 470px) {
    text-align: left;
  }
}
</style>
