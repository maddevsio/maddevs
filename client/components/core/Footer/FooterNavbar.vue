<template>
  <div class="footer-navbar">
    <p class="footer-navbar__company-name">
      © Mad Devs - {{ currentYear }}
    </p>
    <div class="footer-navbar__nav-list">
      <NuxtLink
        v-for="item in navigation"
        :key="item.link"
        :to="item.link"
        target="_blank"
        class="footer-navbar__nav-item"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { footerNavigation as navigation } from '@/data/navigation'

export default {
  name: 'FooterNavbar',
  data() {
    return {
      navigation,
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
.footer-navbar {
  width: max-content;
  margin-top: 64px;

  &__nav-list {
    display: flex;
  }

  &__nav-item,
  &__company-name {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    color: $text-color--grey;
    letter-spacing: -0.013em;
  }

  &__company-name {
    margin-bottom: 6px;
  }

  &__nav-item {
    margin-right: 26px;
    text-decoration: underline;
    text-decoration-color: $footer--text-decoration-color;

    &:last-child {
      margin-right: 0;
    }
  }
}

@media only screen and (max-width: 1320px) {
  .footer-navbar {
    width: initial;
    margin-top: 40px;

    &__nav-list {
      flex-wrap: wrap;
    }

    &__nav-item,
    &__company-name {
      margin-bottom: 3px;
    }

    &__nav-item {
      &:nth-child(1) {
        width: 100%;
      }

      &:nth-child(2),
      &:nth-child(3) {
        margin-right: 15px;
      }

      &:nth-child(4) {
        margin-left: 0;
        margin-bottom: 0;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .footer-navbar {
    &__nav-list {
      flex-direction: column;
    }
  }
}
</style>
