<template>
  <div class="footer-navbar-mobile">
    <p class="footer-navbar-mobile__company-name">© Mad Devs - {{ currentYear }}</p>
    <div class="footer-navbar-mobile__nav-list">
      <div class="footer-navbar-mobile__nav-group">
        <a href="/gdpr" target="_blank" class="footer-navbar-mobile__nav-link">GDPR Compliance Commitment</a>
        <a href="/nda" target="_blank" class="footer-navbar-mobile__nav-link">Non-Disclosure Agreement (NDA)</a>
      </div>
      <a href="/privacy" target="_blank" class="footer-navbar-mobile__nav-link footer-navbar-mobile__nav-link-privacy">Privacy Policy</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-navbar-mobile',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .footer-navbar-mobile {
    margin-top: 40px;
    text-align: center;

    &__nav-link,
		&__company-name {
			font-size: 14px;
			color: $text-color--grey;
      letter-spacing:  -0.02em;
      text-decoration: none;
		}
  }

  @media only screen and (max-width: 600px) {
    .footer-navbar-mobile {
      text-align: left;

      &__nav-link,
      &__company-name {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  @media only screen and (max-width: 470px) {
		.footer-navbar-mobile {
			&__nav-group {
        display: flex;
        flex-direction: column;
      }
		}
  }
</style>
