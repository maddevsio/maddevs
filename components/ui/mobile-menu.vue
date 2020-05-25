<template>
  <div class="mobile-menu">
		<div class="mobile-menu__top-line">
				<div class="mobile-menu__header-logo">
						<img src="../../assets/img/common/logo.svg" alt="Logotype">
				</div>
				<div class="mobile-menu__button">
						<img src="../../assets/img/Header/mobile-menu-hamburger.svg" alt="Open" class="mobile-menu__open" v-if="!mobileMenuIsOpen" @click="toggleMobileMenu()">
						<img src="../../assets/img/Header/mobile-menu-close.svg" alt="Close" class="mobile-menu__close" v-else @click="toggleMobileMenu()">
				</div>
		</div>
		<div class="mobile-menu__content-wrap" v-show="mobileMenuIsOpen">
			<nav class="mobile-menu__header-routes_links">
				<router-link to="/">About</router-link>
				<router-link to="/services">Services</router-link>
				<router-link to="/projects">Projects</router-link>
				<router-link to="/careers">Careers</router-link>
				<a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">Blog</a>
			</nav>
			<buttonTrigger :buttonInnerText="buttonInnerText" :modalWindowName="modalWindowName" class="red-text-and-border" />
			<div class="mobile-menu__contacts">
				<footerContacts />
			</div>
			<div class="mobile-menu__social-network_links">
				<footerSocialNetworkBar />
			</div>
		</div>
  </div>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';
import footerContacts from '@/components/Footer/footer-contacts';
import footerSocialNetworkBar from '@/components/Footer/footer-social-network';

export default {
  name: 'mobile-menu',
  components: {
    buttonTrigger,
    footerContacts,
    footerSocialNetworkBar
  },

  data() {
    return {
      buttonInnerText: 'Contact me',
      mobileMenuIsOpen: false,
      modalWindowName: 'contact-me'
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
      this.$emit('getMobileMenuState', this.mobileMenuIsOpen);

      if (this.mobileMenuIsOpen) {
        this.disableScrollOnBody();
      } else {
        this.enableScrollOnBody();
      }
    },
    disableScrollOnBody() {
      document.body.classList.add('scrollDisabled');
    },
    enableScrollOnBody() {
      document.body.classList.remove('scrollDisabled');
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

	.mobile-menu {
		display: none;
		margin-top: -120px;

		button {
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
	}

	@media only screen and (max-width: 360px) {
		.mobile-menu {
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
