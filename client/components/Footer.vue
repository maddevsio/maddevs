<template>
  <footer :class="`footer ${currentPageName}`">
    <div class="container">
			<div class="footer__content">
				<div class="footer__text-content">
					<div class="footer__title-wrap">
						<h2 class="footer__main-title main-title">Get in Touch</h2>
						<div class="footer__mail-wrapper">
							<img src="@/assets/img/Footer/mail-icon.svg" alt="mail">
							<a class="footer__mailto-link" href="mailto:team@maddevs.io">team@maddevs.io</a>
						</div>
					</div>
          <footerContacts />
				</div>
				<div class="footer__form-wrap">
					<footerForm />
				</div>
			</div>
			<div class="footer__bottom-links-line">
				<p class="footer__company-name">© Mad Devs - {{ currentYear }}</p>
				<div class="footer__left-bottom_links">
					<a href="/gdpr" target="_blank" class="footer__bottom-link">GDPR Compliance Commitment</a>
					<a href="/privacy" target="_blank" class="footer__bottom-link">Privacy Policy</a>
					<a href="/nda" target="_blank" class="footer__bottom-link">Non-Disclosure Agreement (NDA)</a>
				</div>
				<footerSocialNetworkBar />
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
		padding-top: 80px;
    padding-bottom: 59px;

		&__content {
			display: flex;
    	justify-content: space-between;
			padding-bottom: 50px;
		}

		&__main-title {
			-webkit-text-stroke: $text-stroke--white;
		}

		&__mailto-link {
			margin-left: 28px;
			color: $text-color--red;
			font-size: 70px;
			font-family: 'Hoves-Bold';
			text-decoration: none;
			border-bottom: 1px solid;
			letter-spacing: -2px;
		}

		&__bottom-links-line {
			display: flex;
			padding-top: 23px;
			border-top: 1px solid $footer--border-color--grey-light;
		}

		&__left-bottom_links {
			display: flex;
		}

		&__bottom-link,
		&__company-name {
			font-size: 16px;
			font-family: 'Hoves-Regular';
			color: $text-color--grey;
		}

		&__bottom-link {
			padding-left: 26px;
			text-decoration: underline;
			text-decoration-color: $footer--text-decoration-color;

			&:first-child {
				padding-left: 30px;
			}
		}

		&__form-wrap {
			margin-top: 18px;
		}

		&__mail-wrapper {
			margin-top: 58px;
		}
	}

	.gdpr,
	.privacy,
	.nda {
		padding-top: 109px;
		margin-top: 293px;
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

			&__bottom-links-line {
				display: grid;
				justify-content: center;
				grid-row-gap: 25px;
				padding-top: 30px;
				text-align: center;
			}

			&__bottom-link {
				&:first-child {
					padding-left: 0;
				}
			}

			&__company-name {
				grid-row-start: 3;
			}
		}
	}

	@media only screen and (max-width: 1320px) {
		.footer {
			padding-top: 90px;

			&__main-title {
				font-size: 80px;
			}

			&__mailto-link {
				font-size: 62px;
			}

			&__mail-wrapper {
				margin-top: 50px;
			}
		}
	}

	@media only screen and (max-width: 1220px) {
		.footer {
			&__mail-wrapper {
				margin-top: 25px;

				img {
					display: none;
				}
			}

			&__mailto-link {
				margin-left: 0;
				font-size: 46px;
			}

			&__content {
				padding-bottom: 55px;
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer {
			padding-top: 75px;
			padding-bottom: 43px;

			&__main-title {
        // TODO template text
				// font-size: 90px;
        font-size: 80px;
			}
		}
	}

	@media only screen and (max-width: 960px) {
		.footer {
			padding-top: 40px;
			padding-bottom: 50px;

			&__main-title {
				font-size: 64px;
				letter-spacing: -0.03em;
			}

			&__content {
				flex-direction: column;
				padding-bottom: 42px;
			}

			&__mail-wrapper {
				margin-top: 20px;
			}
		}
	}

	@media only screen and (max-width: 760px) {
		.footer {
			&__bottom-links-line {
				padding-top: 35px;
			}

			&__left-bottom_links {
				flex-wrap: wrap;
				justify-content: center;
			}

			&__bottom-link {
				&:last-child {
					padding-top: 10px;
				}
			}
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

			&__main-title {
				font-size: 53px;
				letter-spacing: -2px;
			}

			&__bottom-link {
				padding-left: 10px;
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

			&__bottom-link {
				&:nth-child(2) {
					padding-top: 10px;
				}
			}
		}
	}
</style>
