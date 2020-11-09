<template>
  <div class="mobile-header" :class="{ 'mobile-header--is-open': mobileHeaderIsOpen }">
		<div class="mobile-header__top-line">
			<router-link to="/" class="mobile-header__header-logo" @click.native="mobileHeaderIsOpen = false">
				<headerLogo />
			</router-link>
			<div class="mobile-header__button-wrap">
				<button class="mobile-header__toogle-btn" @click="toggleMobileHeader()" :class="mobileHeaderIsOpen ? 'mobile-header__close' : 'mobile-header__hamburger'"></button>
			</div>
		</div>
		<div class="mobile-header__scrollbar safari_only container">
			<div class="mobile-header__content-wrap" v-show="mobileHeaderIsOpen">
				<div class="mobile-header__nav-wrap">
					<nav class="mobile-header__header-routes_links">
						<router-link class="mobile-header__nav-link" exact to="/">About</router-link>
						<router-link class="mobile-header__nav-link" to="/services">Services</router-link>
						<router-link class="mobile-header__nav-link" to="/projects">Projects</router-link>
						<router-link class="mobile-header__nav-link" to="/careers">Careers</router-link>
						<a href="https://blog.maddevs.io/" class="mobile-header__nav-link mobile-header__nav-blog-link" target="_blank" rel="noreferrer">Blog</a>
					</nav>
					<div class="mobile-header__contacts mobile-header__large-phone-content">
						<div class="mobile-header__contact-item mobile-header__contact-item-email">
							<p class="mobile-header__contact-title">Text us:</p>
							<a href="mailto:team@maddevs.io" class="mobile-header__contact-link mobile-header__contact-mail">team@maddevs.io</a>
						</div>
						<div class="mobile-header__contact-item">
							<div class="mobile-header__contact-title-wrapper">
								<div class="mobile-header__contact-title-flag"></div>
								<p class="mobile-header__contact-title">Call us:</p>
							</div>
							<a href="tel:+44 20 3984 8555" class="mobile-header__contact-link mobile-header__contact-phone-number">+44 20 3984 8555</a>
						</div>
						<ul class="mobile-header__messengers-list">
							<li v-for="(messenger, i) in messengers" :key="i">
								<a :href="messenger.link" target="__blank" class="mobile-header__messenger-item-wrapper">
									<span class="mobile-header__messenger-item" :class="`mobile-header__${messenger.className}`" />
									<p class="mobile-header__messenger-name">{{ messenger.name }}</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<UIButtonModalTrigger
					:buttonInnerText="buttonInnerText"
					:isRed="true"
					:modalWindowName="modalWindowName"
					class="mobile-header__modal-trigger-btn"
				/>
				<footerContacts class="mobile-header__small-phone-content" />
			</div>
		</div>
	</div>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';
import footerSocialNetworkList from '@/components/Footer/footer-social-network-list';
import footerContacts from '@/components/Footer/footer-contacts';
import headerLogo from '@/components/svg/headerLogo';

export default {
  name: 'mobile-header',
  components: {
    UIButtonModalTrigger,
    footerSocialNetworkList,
    footerContacts,
    headerLogo
  },
  data() {
    return {
      buttonInnerText: 'Contact me',
      mobileHeaderIsOpen: false,
      modalWindowName: 'contact-me-modal',
      messengers: [
        {
	        name: 'Messenger',
	        className: 'messenger-facebook-messenger',
	        link: 'https://facebook.com/maddevsllc'
        },
        {
	        name: 'WhatsApp',
	        className: 'messenger-watsapp',
	        link: 'http://wa.me/996555771481'
        },
        {
          name: 'Telegram',
          className: 'messenger-telegram',
          link: 'https://t.me/mun_tamara/'
        },
        {
          name: 'WeChat',
          className: 'messenger-wechat',
          link: 'https://msng.link/o/?https%3A%2F%2Fu.wechat.com%2FICWluRgJH8tu0IisMQ1eEFo=wc'
        }
      ]
    };
  },
  watch: {
    '$route'() {
      this.mobileHeaderIsOpen = false;
      this.enableScrollOnBody();
    }
  },
  methods: {
    toggleMobileHeader() {
      this.mobileHeaderIsOpen = !this.mobileHeaderIsOpen;
      if(this.mobileHeaderIsOpen) {
        this.disableScrollOnBody();
      } else {
        this.enableScrollOnBody();
      }
    },
    enableScrollOnBody() {
      document.body.classList.remove('scrollDisabled');
    },
    disableScrollOnBody() {
      document.body.classList.add('scrollDisabled');
    }
  }
};
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/vars';
	@import '../../assets/styles/_messengerIcons';
	@import '../../assets/styles/_flagsIcons';
	@import '../../assets/styles/_headerIcons';

	.mobile-header {
		width: 100%;
		height: 48px;
		display: none;
		position: fixed;
		z-index: 2;
		background-color: $bgcolor--black ;

		&__modal-trigger-btn {
			width: 100%;
			height: 60px;
			margin-top: 5px;
			margin-bottom: 55px;
			font-family: 'Poppins-Regular', sans-serif;
			font-size: 16px;
    }

		&__top-line {
			max-height: 48px;
			display: flex;
			justify-content: space-between;
			padding: 0 34px;

			@media screen and (max-width: 970px) {
				padding: 0 28px;
			}

			@media screen and (max-width: 768px) {
				padding: 0 18px;
			}

			@media screen and (max-width: 440px) {
				padding: 0 24px;
			}
		}

		&__header-logo {
			width: 28px;
			height: 49px;
			margin-top: 11px;
			z-index: 2;
    }

    &__content-wrap {
			padding-top: 27px;
			background-color: $bgcolor--black;
		}

		&__nav-wrap,
		&__header-routes_links {
			display: flex;
		}

		&__nav-wrap {
			justify-content: space-between;
		}

    &__header-routes_links {
			width: 40%;
			flex-direction: column;
		}

		&__nav-link {
			padding: 14px 0;
			font-size: 32px;
			font-family: 'Poppins-Medium', sans-serif;
			letter-spacing: -1px;
			line-height: 38px;
			text-decoration: none;
			color: $text-color--white;
			border-bottom: 1px solid $header-grey-border-color;
		}

		&__nav-blog-link {
			padding-bottom: 54px;
			border-bottom: 0;
		}

		&__social-network_links {
			padding: 32px 0;
			border-top: 1px solid $footer--border-color--grey-light;
		}

		&__toogle-btn {
			display: block;
			margin-top: 9px;
			padding: 0;
			border: 0;
			box-shadow: none;
			background-color: transparent;
			cursor: pointer;
		}

		&__hamburger,
		&__close {
			width: 30px;
			height: 30px;
		}

		&__hamburger {
			@include hamburger;
		}

		&__close {
			@include close;
		}

		.nuxt-link-active {
			color: $text-color--red;

			&::after {
				color: $text-color--red;
			}
		}

		&__contacts {
			margin-top: 12px;
      margin-left: 40px;
		}

		&__messengers-list {
			display: grid;
			grid-template-columns: repeat(2, max-content);
			grid-column-gap: 60px;
			grid-row-gap: 6px;
			margin-top: 53px;
			margin-left: -7px;
		}

		&__contact-title-wrapper,
		&__messenger-item-wrapper {
			display: flex;
    	align-items: center;
		}

		&__messenger-item-wrapper {
			text-decoration: none;
		}

		&__contact-title,
		&__messenger-name {
			font-family: 'Poppins-Regular', sans-serif;
		}

		&__contact-title,
		&__contact-link {
			color: $text-color--white;
		}

		&__contact-item-email {
			margin-bottom: 33px;
		}

		&__contact-link {
			display: inline-block;
			margin-top: 11px;
			font-size: 28px;
			line-height: 38px;
			letter-spacing: -1px;
      font-family: 'Poppins-Medium', sans-serif;
			border-bottom: 1px solid $header-red-border-color;
			text-decoration: none;
		}

		&__contact-title-flag {
			display: block;
			width: 18px;
			height: 14px;
			margin-right: 8px;
			@include flag-uk;
		}

		&__contact-title,
		&__messenger-name {
			letter-spacing: -0.02em;
		}

		&__contact-title {
			font-size: 16px;
			line-height: 24px;
		}

		&__messenger-item {
			display: block;
			width: 42px;
			height: 42px;
			margin-right: 3px;
		}

		&__messenger-name {
			font-size: 16px;
			line-height: 24px;
			color: $text-color--grey;
		}

		&__icons-list {
			margin-bottom: 73px;
		}

		&__small-phone-content {
			display: none;
		}

		&--is-open {
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			background: $bgcolor--black;

			.mobile-header__scrollbar {
				height: calc(100vh - 50px);
				overflow: auto;
			}
		}

		&__messenger-facebook-messenger {
			@include messenger-facebook-messenger;
		}

		&__messenger-watsapp {
			@include messenger-watsapp;
		}

		&__messenger-telegram {
			@include messenger-telegram;
		}

		&__messenger-wechat {
			@include messenger-wechat;
		}

		@media screen and (max-width: 991px) {
			display: block;
			margin-top: 0;
			box-sizing: border-box;
		}
	}

	@media screen and (max-width: 640px) {
		.mobile-header {
    	&__header-routes_links {
				width: 100%;
			}

			&__large-phone-content {
				display: none;
			}

			&__icons-list {
				margin-bottom: 0;
			}

			&__small-phone-content {
				display: block;
				margin-bottom: 53px;
			}

			/deep/ .footer-contacts__head-content {
				margin-bottom: 62px;
			}

			/deep/ .footer-contacts__social-network-list-desktop {
				display: block;
			}

			/deep/ .footer-contacts__messenger-name,
			/deep/ .footer-contacts__contact-title {
				font-size: 15px;
			}

			/deep/ .footer-contacts__messenger-item,
			/deep/ .footerSocialNetworkList__social-network-link {
				width: 42px;
				height: 42px;
			}

			/deep/ .footer-contacts__contact-link {
				font-size: 28px;
			}
		}
  }

  @media screen and (max-width: 600px) {
    .mobile-header {
      /deep/ .footer-contacts__messengers-list {
        grid-column-gap: 60px;
      }
    }
  }

	@media only screen and (max-width: 360px) {
		.mobile-header {

      /deep/ .footer-contacts__messengers-list {
        grid-column-gap: 33px;
        width: 100%;
      }

			&__header-routes_links {
				padding-top: 20px;
			}

			&__nav-link {
				padding: 10px 0;
				font-size: 29px;
			}

			&__nav-blog-link {
				padding-bottom: 25px;
			}
		}
	}

	// IOS only styles
	@media only screen and (max-width: 991px) {
		@media not all and (min-resolution:.001dpcm)
		{ @supports (-webkit-appearance: none) {
	
			.safari_only { 
				height: calc(100vh - 150px) !important;
			}
		}}
	}
</style>

