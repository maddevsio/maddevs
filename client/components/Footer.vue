<template>
  <footer :class="`footer ${currentPageName}`">
    <div class="container">
			<div class="footer__content row">
				<div class="footer__left-content col-xl-8 col-lg-8">
					<h2 class="footer__main-title">Get In Touch</h2>
					<footerContacts />
					<footerNavbar />
				</div>
				<div class="footer__form-wrap col-xl-4 col-lg-4">
					<footerForm />
				</div>
			</div>
    </div>
  </footer>
</template>

<script>
import footerForm from '@/components/Footer/footer-form';
import footerContacts from '@/components/Footer/footer-contacts';
import footerNavbar from '@/components/Footer/footer-navbar';

export default {
  name: 'Footer',
  components: {
    footerForm,
    footerContacts,
    footerNavbar
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
			margin-bottom: 46px;
			font-size: 62px;
			font-family: 'Poppins-Bold', sans-serif;
			line-height: 74px;
			letter-spacing: -1px;
			color: $text-color--red;
		}

		&__left-content {
			padding-right: 128px;
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

	@media only screen and (max-width: 1320px) {
		.footer {
			&__nav-item,
			&__company-name {
				font-size: 14px;
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		.footer {
			&__main-title {
				margin-bottom: 20px;
			}

			&__navbar {
				margin-top: 59px;
			}
		}
	}

	@media only screen and (max-width: 991px) {
		.footer {
			&__form-wrap,
			&__left-content {
				padding-left: 0;
				padding-right: 0;
			}
			
			&__form-wrap {
				padding-top: 39px;
			}
		}
	}
</style>
