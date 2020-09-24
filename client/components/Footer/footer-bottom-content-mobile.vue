<template>
  <div class="footer-bottom-content">
    <footerSocialNetworkBar />
    <div class="footer-bottom-content__links-wrapper">
      <p class="footer-bottom-content__company-name">© Mad Devs - {{ currentYear }}</p>
      <div class="footer-bottom-content__links">
        <div class="footer-bottom-content__links-group">
          <a href="/gdpr" target="_blank" class="footer-bottom-content__link">GDPR Compliance Commitment</a>
          <a href="/privacy" target="_blank" class="footer-bottom-content__link">Privacy Policy</a>
        </div>
        <a href="/nda" target="_blank" class="footer-bottom-content__link">Non-Disclosure Agreement (NDA)</a>
      </div>
    </div>
  </div>
</template>

<script>
import footerSocialNetworkBar from '@/components/Footer/footer-social-network';

export default {
  name: 'FooterContactsMobile',
  components: {
    footerSocialNetworkBar
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .footer-bottom-content {
    display: none;
    padding: 0;

    /deep/ .footer-social-network {
      justify-content: space-between;
      margin-top: 60px;
      margin-top: 45px;
    }

    /deep/ .footer-social-network__icon {
      margin-right: 0;
    }

    /deep/ .links__links {
      display: flex;
      flex-direction: column;
    }

    /deep/ .links__links-wrapper {
      margin-top: 40px;
      text-align: center;
    }

    &__links-wrapper {
      margin-top: 40px;
      text-align: center;
    }

		&__link,
		&__company-name {
			font-size: 12px;
			font-family: 'Formular-Regular';
			color: $text-color--grey;
			letter-spacing:  -0.02em;
		}
  }
  
  @media only screen and (max-width: 670px) {
		.footer-bottom-content {
			display: block;
		}
	}
</style>
