<template>
  <perfect-scrollbar>
		<div class="mobile-header" :class="{'is-open':mobileHeaderIsOpen}">
			<div class="container">
				<div class="mobile-header__top-line">
						<div class="mobile-header__header-logo">
								<img src="../../assets/img/common/logo.svg" alt="Logotype">
						</div>
						<div class="mobile-header__button-wrap">
							<button class="mobile-header__toogle-btn" @click="toggleMobileMenu()">
								<img src="../../assets/img/Header/mobile-header-hamburger.svg" alt="Open" class="mobile-header__open" v-if="!mobileHeaderIsOpen">
								<img src="../../assets/img/Header/mobile-header-close.svg" alt="Close" class="mobile-header__close" v-else>
							</button>
						</div>
				</div>
				<div class="mobile-header__content-wrap" v-show="mobileHeaderIsOpen">
					<nav class="mobile-header__header-routes_links">
						<router-link to="/">About</router-link>
						<router-link to="/services">Services</router-link>
						<router-link to="/projects">Projects</router-link>
						<router-link to="/careers">Careers</router-link>
						<a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">Blog</a>
					</nav>
					<buttonTrigger :buttonInnerText="buttonInnerText" :modalWindowName="modalWindowName" class="mobile-header__modal-trigger-btn red-text-and-border" />
					<div class="mobile-header__contacts">
						<footerContacts />
					</div>
					<div class="mobile-header__social-network_links">
						<footerSocialNetworkBar />
					</div>
				</div>
			</div>
		</div>
		</perfect-scrollbar>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';
import footerContacts from '@/components/Footer/footer-contacts';
import footerSocialNetworkBar from '@/components/Footer/footer-social-network';

export default {
  name: 'mobile-header',
  components: {
    buttonTrigger,
    footerContacts,
    footerSocialNetworkBar
  },

  data() {
    return {
      buttonInnerText: 'Contact me',
      mobileHeaderIsOpen: false,
      modalWindowName: 'contact-me'
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileHeaderIsOpen = !this.mobileHeaderIsOpen;
      this.$emit('getMobileMenuState', this.mobileHeaderIsOpen);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

	.mobile-header {
    width: 100%;
		display: none;
		margin-top: -120px;

		&__modal-trigger-btn {
			width: 100%;
      height: 65px;
			font-family: 'Hoves-Bold';
			font-size: 27px;
      color: $text-color--red;
    	border-color: $border-color--red;
    }

		&__top-line {
			display: flex;
			justify-content: space-between;
		}

		&__header-logo {
      width: 35px;
			height: 60px;
			margin-left: -62px;
    }

    &__content-wrap {
			height: 100%;
		}

    &__header-routes_links {
			width: 100%;
			display: flex;
			flex-direction: column;
			padding-top: 32px;
		}

		&__header-routes_links a {
			padding: 14px 0;
			font-size: 36px;
			font-family: 'Hoves-Bold';
			text-decoration: none;
			color: $text-color--white;
			border-bottom: 1px solid $border-color--grey;

			&:last-child {
				padding-bottom: 54px;
				border-bottom: 0;
			}
		}

		&__close,
		&__open {
			cursor: pointer;
		}

		&__social-network_links {
			padding: 32px 0;
			border-top: 1px solid $footer--border-color--grey-light;
		}

		&__contacts {
			padding-bottom: 42px;
		}

		.footer-contacts {
			padding-top: 41px;
		}

		&__button-wrap {
			margin-right: -62px;
		}

		&__toogle-btn {
			background-color: transparent;
			box-shadow: none;
			border: none;
		}
	}
	
	.is-open {
		position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
		background: black; 
		
		/deep/.page-scrollbar {
			height: 0;
		}
	}

  @media only screen and (max-width: 1024px) {
		.mobile-header {
			display: block;
			height: 100%;
			margin-top: 0;
			padding: 22px 0;
			box-sizing: border-box;
		}
	}

	@media only screen and (max-width: 768px) {
		.mobile-header {
			&__button-wrap {
				margin-right: -50px;
			}

			&__header-logo {
				margin-left: -50px;
			}
		}
	}

	@media only screen and (max-width: 440px) {
		.mobile-header {
			&__button-wrap {
				margin-right: 0;
			}

			&__header-logo {
				margin-left: 0;
			}
		}
	}

	@media only screen and (max-width: 360px) {
		.mobile-header {
			&__header-routes_links {
				padding-top: 20px;

				a {
					padding: 10px 0;
					font-size: 29px;

					&:last-child {
						padding-bottom: 25px;
					}
				}
			}
		}
	}
</style>
