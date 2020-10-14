<template>
	<div class="footer-contacts">
		<div class="footer-contacts__head-content">
			<div class="footer-contacts__contact-item">
				<p class="footer-contacts__contact-title">Text us:</p>
				<a href="mailto:team@maddevs.io" class="footer-contacts__contact-link footer-contacts__contact-mail">team@maddevs.io</a>
			</div>
			<div class="footer-contacts__contact-item">
				<div class="footer-contacts__contact-title-wrapper">
					<div class="footer-contacts__contact-title-flag flag-uk"></div>
					<p class="footer-contacts__contact-title">Call us:</p>
				</div>
				<a href="tel:+44 20 3984 8555" class="footer-contacts__contact-link footer-contacts__contact-phone-number">+44 20 3984 8555</a>
			</div>
		</div>
		<div class="footer-contacts__lists-wrapper">
			<ul class="footer-contacts__messengers-list">
				<li v-for="(messenger, i) in messengers" :key="i" class="footer-contacts__messenger-item-wrapper">
					<a :href="messenger.link" class="footer-contacts__messenger-item" :class="`footer-contacts__${messenger.className}`" target="__blank"></a>
					<p class="footer-contacts__messenger-name">{{ messenger.name }}</p>
				</li>
			</ul>
			<div class="footer-contacts__social-network-list-desktop">
				<footerSocialNetworkList />
			</div>
		</div>
	</div>
</template>

<script>
import footerSocialNetworkList from '@/components/Footer/footer-social-network-list';

export default {
  name: 'footer-contacts',
  components: {
    footerSocialNetworkList
  },
  data() {
    return {
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
  }
};
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/vars';
	@import '../../assets/styles/_messengerIcons';
	@import '../../assets/styles/_flagsIcons';

	@mixin contacts-head-content {
		&__head-content {
			flex-direction: column;
			margin-bottom: 31px;
		}

		&__contact-item {
			&:last-child {
				margin-top: 38px;
			}
		}
	}

	@mixin messenger-list-grid {
		&__messengers-list {
			width: max-content;
			display: grid;
			grid-template-columns: repeat(2, max-content);
			grid-column-gap: 40px;
		}

		&__messenger-item-wrapper {
			justify-content: flex-start;
		}

		&__messenger-item-wrapper {
			&:nth-child(3) {
				margin-left: -8px;
			}
		}
	}

	.footer-contacts {
		&__head-content {
			margin-bottom: 68px;
		}

		&__head-content,
		&__messengers-list,
		&__messenger-item-wrapper {
			display: flex;
			justify-content: space-between;
		}

		&__contact-title-wrapper {
			display: flex;
    	align-items: center;
		}

		&__contact-title,
		&__messenger-name {
			font-size: 16px;
			line-height: 24px;
			letter-spacing: -0.02em;
			font-family: 'Poppins-Regular', sans-serif;
		}

		&__contact-title-flag {
			&::before {
				content: '';
				display: block;
			}
		}

		&__contact-title-flag {
			&::before {
				width: 18px;
				height: 14px;
				margin-right: 8px;
			}
		}

		&__contact-title,
		&__contact-link {
			color: $text-color--white;
		}

		&__contact-link {
			display: inline-block;
			margin-top: 12px;
			font-size: 34px;
			font-weight: 600;
			font-family: 'Poppins-Regular', sans-serif;
			line-height: 32px;
			letter-spacing: -1px;
			border-bottom: 1px solid $border-color--red;
			text-decoration: none;
		}

		&__lists-wrapper {
			max-width: 85%;
		}

		&__messenger-item-wrapper {
			align-items: center;

			&:first-child {
				margin-left: -8px;
			}
		}

		&__messenger-item {
			display: block;
			width: 42px;
			height: 42px;
			margin-right: 3px;
		}

		&__messenger-name {
			color: $text-color--grey;
		}

		&__social-network-list-desktop {
			margin-top: 52px;
			padding-top: 52px;
			border-top: 1px solid $border-color--grey-dark-transparent;
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
	}

	@media only screen and (max-width: 1320px) {
		.footer-contacts {
			&__contact-link {
				font-size: 30px;
			}

			&__contact-title,
			&__messenger-name {
				font-size: 14px;
			}

			&__messenger-item {
				width: 36px;
				height: 36px;
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		.footer-contacts {
			&__social-network-list-desktop {
				margin-top: 35px;
				padding-top: 40px;
			}

			@include contacts-head-content;
		}
	}

	@media only screen and (min-width: 992px) and (max-width: 1140px) {
		.footer-contacts {
		  @include messenger-list-grid;
		}
	}

	@media only screen and (max-width: 991px) {
		.footer-contacts {
			&__head-content {
				flex-direction: row;
			}

			&__contact-item {
				&:last-child {
					margin-top: 0;
				}
			}

			&__lists-wrapper {
				max-width: 100%;
			}

			&__social-network-list-desktop {
				display: none;
			}
		}
	}

	@media only screen and (max-width: 640px) {
		.footer-contacts {
			@include contacts-head-content;
		  @include messenger-list-grid;
		}
	}
</style>
