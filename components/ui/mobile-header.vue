<template>
  <div class="mobile-header">
		<div class="mobile-header__top-line">
				<div class="mobile-header__header-logo">
						<img src="../../assets/img/common/logo.svg" alt="Logotype">
				</div>
				<div class="mobile-header__button">
						<img src="../../assets/img/Header/mobile-menu-hamburger.svg" alt="Open" class="mobile-header__open" v-if="!mobileMenuIsOpen" @click="showMobileMenu()">
						<img src="../../assets/img/Header/mobile-menu-close.svg" alt="Close" class="mobile-header__close" v-else @click="mobileMenuIsOpen = !mobileMenuIsOpen">
				</div>
		</div>
		<div class="mobile-header__content-wrap" v-show="mobileMenuIsOpen">
			<nav class="mobile-header__header-routes_links">
				<router-link to="/">About</router-link>
				<router-link to="/services">Services</router-link>
				<router-link to="/projects">Projects</router-link>
				<router-link to="/careers">Careers</router-link>
				<a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">Blog</a>
			</nav>
			<buttonTrigger :buttonInnerText="buttonInnerText"/>
		</div>
  </div>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'mobile-header',
  components: {
    buttonTrigger
  },

  data() {
    return {
      buttonInnerText: 'Contact me',
      mobileMenuIsOpen: false
    };
  },
  methods: {
    showMobileMenu() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

	.mobile-header {
		display: none;
		margin-top: -120px;

		button {
			width: 100%;
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
				border-bottom: none;
			}
		}
	}

	.mobile-header {
		button {
			height: 65px;
		}
	}
</style>
