<template>
  <footer :class="`footer ${currentPageName}`">
    <div class="container">
			<div class="footer__content row">
				<div class="footer__text-content col-xl-7">
					<div class="footer__title-wrap">
						<h2 class="footer__title title-new">Get In Touch</h2>
						<div class="footer__mail-wrapper">
							<a class="footer__mailto-link" href="mailto:team@maddevs.io">team@maddevs.io</a>
							<span class="footer__underline" />
						</div>
					</div>
          <footerContacts />
					<footerSocialNetworkBar />
					<div class="footer__links-wrapper">
						<p class="footer__company-name">© Mad Devs - {{ currentYear }}</p>
						<div class="footer__links">
							<a href="/gdpr" target="_blank" class="footer__link">GDPR Compliance Commitment</a>
							<a href="/privacy" target="_blank" class="footer__link">Privacy Policy</a>
							<a href="/nda" target="_blank" class="footer__link">Non-Disclosure Agreement (NDA)</a>
						</div>
					</div>
				</div>
				<div class="footer__form-wrap col-xl-5">
					<footerForm />
				</div>
			</div>
    </div>
  </footer>
</template>

<script>
import footerForm from '@/components/Footer/footer-form';
import footerContacts from '@/components/Footer/footer-contacts';
import footerSocialNetworkBar from '@/components/Footer/footer-social-network';

export default {
  name: 'Footer',
  components: {
    footerForm,
    footerContacts,
    footerSocialNetworkBar
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

	@media only screen and (max-width: 1440px) {
		.footer {
			padding-top: 110px;
			padding-bottom: 103px;
		}
	}

	@media only screen and (max-width: 1420px) {
		.footer {
			padding-bottom: 65px;
		}
	}

	@media only screen and (max-width: 1220px) {
		.footer {
			&__mail-wrapper {

				img {
					display: none;
				}
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer {
			padding-bottom: 43px;
		}
	}

	@media only screen and (max-width: 960px) {
		.footer {
			padding-top: 40px;
			padding-bottom: 50px;

			&__content {
				flex-direction: column;
			}
		}
	}

	@media only screen and (max-width: 760px) {
		.gdpr,
		.privacy,
		.nda {
			margin-top: 60px;
		}
	}

	@media only screen and (max-width: 680px) {
		.footer {
			padding-top: 60px;
		}
	}

	@media only screen and (max-width: 420px) {
		.footer {
			padding-top: 55px;
			padding-bottom: 17px;

			&__mailto-link {
				font-size: 40px;
				letter-spacing: -0.02em;
			}

			&__title {
				font-size: 53px;
				letter-spacing: -2px;
			}
		}
	}

	@media only screen and (max-width: 370px) {
		.footer {
			padding-bottom: 43px;

			&__mailto-link {
				font-size: 34px;
			}

			&__mail-wrapper {
				margin-top: 10px;
			}
		}
	}
</style>
