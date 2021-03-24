<template>
  <div class="footer-navbar-mobile">
    <p class="footer-navbar-mobile__company-name">© Mad Devs - {{ currentYear }}</p>
    <div class="footer-navbar-mobile__nav-list">
      <a href="/gdpr/" target="_blank" class="footer-navbar-mobile__nav-link">GDPR Compliance Commitment</a>
      <a href="/nda/" target="_blank" class="footer-navbar-mobile__nav-link">Non-Disclosure Agreement (NDA)</a>
      <a href="/privacy/" target="_blank" class="footer-navbar-mobile__nav-link footer-navbar-mobile__nav-link-privacy"
        >Privacy Policy</a
      >
      <a href="/faq/" target="_blank" class="footer-navbar-mobile__nav-link">FAQ</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterNavbarMobile',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

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
