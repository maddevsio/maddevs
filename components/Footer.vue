<template>
  <footer class="footer">
    <div class="container">
			<div class="footer__content">
				<div class="footer__text-content">
					<div class="footer__title-wrap">
						<h2 class="footer__main-title main-title">Get In Touch</h2>
						<a class="footer__mailto-link" href="mailto:team@maddevs.io">team@maddevs.io</a>
					</div>
          <footerContacts />
				</div>
				<div class="footer__form-wrap">
					<footerForm />
				</div>
			</div>
			<div class="footer__bottom-links-line">
				<div class="footer__left-bottom_links">
					<p class="footer__company-name">© Mad Devs - {{ currentYear }}</p>
					<a href="https://maddevs.io/gdpr/" class="footer__bottom-link">GDPR Compliance Commitment</a>
					<a href="#" class="footer__bottom-link">Privacy Policy</a>
					<a href="/nda" class="footer__bottom-link">Non-Disclosure Agreement (NDA)</a>
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
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

	.footer {
		padding-top: 129px;
		padding-bottom: 87px;

		&__content {
			display: flex;
    	justify-content: space-between;
			padding-bottom: 57px;
		}

		&__main-title {
			text-shadow: $text-shadow--white;
		}

		&__mailto-link {
			color: $text-color--red;
			font-size: 70px;
			font-family: 'Hoves-Bold';
			text-decoration: none;
			border-bottom: 1px solid;
		}

		&__bottom-links-line {
			display: flex;
			justify-content: space-between;
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
			text-decoration: none;

			&:first-child {
				padding-left: 30px;
			}

			&:nth-child(3) {
				text-decoration: underline;
				text-decoration-color: $footer--text-decoration-color;
			}
		}
	}

	@media only screen and (max-width: 1320px) {
		.footer {
			&__bottom-link,
			&__company-name {
				font-size: 13px;
			}
		}
	}

	@media only screen and (max-width: 1180px) {
		.footer {
			&__mailto-link {
				font-size: 55px;
			}
		}
	}

	@media only screen and (max-width: 1150px) {
		.footer {
			&__bottom-link {
				padding-left: 15px;
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer {
			&__content {
				flex-direction: column;
			}

			&__bottom-links-line {
				flex-direction: column-reverse;
				padding-left: 0;
			}

			&__left-bottom_links {
				padding-top: 20px;
			}
		}
	}

	@media only screen and (max-width: 920px) {
		.footer {
			&__main-title {
				font-size: 120px;
			}
		}
	}

	@media only screen and (max-width: 870px) {
		.footer {
			&__main-title {
				font-size: 100px;
			}
		}
	}

	@media only screen and (max-width: 768px) {
		.footer {
			&__mailto-link {
				font-size: 36px;
			}

			&__left-bottom_links {
				display: grid;
				grid-template-columns: 1fr;
			}

			&__bottom-link {
				padding-top: 8px;
				padding-left: 0;

				&:nth-child(3) {
					grid-row-start: 3;
				}
			}

			&__company-name {
				grid-row-start: 4;
				padding-top: 35px;
			}
		}
	}

	@media only screen and (max-width: 728px) {
		.footer {
			&__main-title {
				font-size: 75px;
			}
		}
	}

	@media only screen and (max-width: 600px) {
		.footer {
			&__main-title {
				font-size: 75px;
			}
		}
	}

	@media only screen and (max-width: 520px) {
		.footer {
			&__main-title {
				font-size: 65px;
			}
		}
	}

	@media only screen and (max-width: 440px) {
		.footer {
			&__main-title {
				font-size: 55px;
			}
		}
	}

	@media only screen and (max-width: 370px) {
		.footer {
			&__main-title {
				font-size: 45px;
			}

			&__mailto-link {
				font-size: 25px;
			}
		}
	}
</style>
