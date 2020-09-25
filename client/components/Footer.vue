<template>
  <footer :class="`footer ${currentPageName}`">
    <div class="container">
			<div class="footer__content row">
				<div class="footer__text-content col-xl-7 col-lg-8 col-md-7">
					<div class="footer__title-wrap">
						<h2 class="footer__title title">Get In Touch</h2>
						<div class="footer__mail-wrapper">
							<a class="footer__mailto-link" href="mailto:team@maddevs.io">team@maddevs.io</a>
							<span class="footer__underline" />
						</div>
					</div>
          <footerContacts />
					<footerSocialNetworkBar class="footer__social-network"/>
					<div class="footer__links-wrapper">
						<p class="footer__company-name">© Mad Devs - {{ currentYear }}</p>
						<div class="footer__links">
							<a href="/gdpr" target="_blank" class="footer__link">GDPR Compliance Commitment</a>
							<a href="/privacy" target="_blank" class="footer__link">Privacy Policy</a>
							<a href="/nda" target="_blank" class="footer__link">Non-Disclosure Agreement (NDA)</a>
						</div>
					</div>
				</div>
				<div class="footer__form-wrap col-xl-5 col-lg-4 col-md-5">
					<footerForm />
				</div>
				<footerBottomContentMobile />
			</div>
    </div>
  </footer>
</template>

<script>
import footerForm from '@/components/Footer/footer-form';
import footerContacts from '@/components/Footer/footer-contacts';
import footerSocialNetworkBar from '@/components/Footer/footer-social-network';
import footerBottomContentMobile from '@/components/Footer/footer-bottom-content-mobile';

export default {
  name: 'Footer',
  components: {
    footerForm,
    footerContacts,
    footerSocialNetworkBar,
    footerBottomContentMobile
  },
  mounted() {
    if ($nuxt.$route.name) {
      this.currentPageName = $nuxt.$route.name;
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentPageName: ''
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

	.footer {
		padding-top: 65px;
		padding-bottom: 59px;

		&__title {
		  color: $section-title-white;
		}

		&__text-content {
			padding: 0
		}

		&__mail-wrapper {
			width: max-content;
		}

		&__mailto-link {
			color: $text-color--red;
			font-size: 48px;
			font-family: 'Poppins-Bold';
			text-decoration: none;
			letter-spacing: -1px;
		}

		&__underline {
			width: 100%;
			height: 1px;
			display: block;
			margin-top: -15px;
			background-color: $bgcolor--red;
		}

		&__links-wrapper {
			width: max-content;
			margin-top: 79px;
		}

		&__links {
			display: flex;
		}

		&__link,
		&__company-name {
			font-size: 15px;
			font-family: 'Formular-Regular';
			color: $text-color--grey;
			letter-spacing:  -0.02em;
		}

		&__company-name {
			margin-bottom: 6px;
		}

		&__link {
			padding-left: 26px;
			text-decoration: underline;
			text-decoration-color: $footer--text-decoration-color;

			&:first-child {
				padding-left: 0;
			}
		}

		&__form-wrap {
			margin-top: 18px;
		}
	}

	.gdpr,
	.privacy,
	.nda {
		padding-top: 109px;
		margin-top: 90px;
		border-top: 1px solid $border-color--grey-dark;
	}

	@media only screen and (max-width: 1024px) {
		.footer {
			&__mailto-link {
				font-size: 32px;
			}

			&__underline {
				margin-top: -11px;
			}

			&__links-wrapper {
				margin-top: 45px;
			}

			&__link,
			&__company-name {
				font-size: 12px;
			}
		}
	}

	@media only screen and (max-width: 767px) {
		.footer {
			&__links-wrapper,
			&__social-network {
				display: none;
			}

			&__form-wrap {
				padding-top: 39px;
			}
		}
	}

</style>
