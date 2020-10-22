<template>
  <footer :class="`footer ${currentPageName}`">
    <div class="container">
			<div class="footer__content row">
				<div class="footer__left-content col-xl-8 col-lg-7">
					<h2 class="footer__main-title">Get In Touch</h2>
					<footerContacts />
					<footerNavbar class="footer__navbar-desktop" />
				</div>
				<div class="footer__form-wrap col-xl-4 col-lg-5">
					<footerForm />
				</div>
			</div>
			<div class="footer__mobile-content footer__social-network-list-mobile">
				<footerSocialNetWorkList />
			</div>
			<div class="footer__mobile-content">
				<footerNavbarMobile />
			</div>
    </div>
  </footer>
</template>

<script>
import footerForm from '@/components/Footer/footer-form';
import footerContacts from '@/components/Footer/footer-contacts';
import footerNavbar from '@/components/Footer/footer-navbar';
import footerNavbarMobile from '@/components/Footer/footer-navbar-mobile';
import footerSocialNetWorkList from '@/components/Footer/footer-social-network-list';

export default {
  name: 'Footer',
  components: {
    footerForm,
    footerContacts,
    footerNavbar,
    footerNavbarMobile,
    footerSocialNetWorkList
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
	@import '../assets/styles/_flagsIcons';

	.footer {
		padding-top: 100px;
		padding-bottom: 92px;

		&__main-title {
			margin-bottom: 43px;
			font-size: 62px;
			font-family: 'Poppins-Bold', sans-serif;
      font-weight: 700;
			line-height: 74px;
			letter-spacing: -1px;
			color: $text-color--red;
		}

		&__left-content {
			padding-right: 128px;
		}

		&__form-wrap {
			margin-top: 20px;
		}

		&__mobile-content {
			display: none;
		}

		&__social-network-list-mobile {
			margin: 40px -16px;
		}
	}

	.gdpr,
	.privacy,
	.nda {
		padding-top: 109px;
		margin-top: 90px;
		border-top: 1px solid $border-color--grey-dark;
	}

	@media only screen and (max-width: 1200px) {
		.footer {
			&__main-title {
				margin-bottom: 20px;
			}

			&__form-wrap {
				margin-top: 33px;
			}

			&__left-content {
				padding-right: 40px;
			}
		}
	}

	@media only screen and (max-width: 991px) {
		.footer {
			padding-top: 75px;
			padding-bottom: 50px;

			&__form-wrap,
			&__left-content {
				padding-left: 0;
				padding-right: 0;
			}

			&__form-wrap {
				margin-top: 30px;
			}

			&__mobile-content {
				display: block;
			}

			&__navbar-desktop {
				display: none;
			}
		}
	}

	@media only screen and (max-width: 576px) {
		.footer {
			padding-top: 50px;

			&__main-title {
				font-size: 46px;
			}

			&__social-network-list-mobile {
				margin-left: 0;
				margin-right: 0;
			}
		}
	}
</style>
