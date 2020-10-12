<template>
	<div class="footer-contacts">
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
						<a :href="messenger.link" class="footer-contacts__messenger-item" :class="messenger.className" target="__blank"></a>
						<p class="footer-contacts__messenger-name">{{ messenger.name }}</p>
					</li>
				</ul>
				<ul class="footer-contacts__social-network-list">
					<li v-for="(socialNetwork, i) in socialNetworkList" :key="i" class="footer-contacts__social-network-item-wrapper">
						<a :href="socialNetwork.link" class="footer-contacts__social-network-item" :class="socialNetwork.className" target="__blank"></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'footer-contacts',
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
      ],
      socialNetworkList: [
        {
          className: 'social-network-github',
          link: 'https://github.com/maddevsio'
        },
        {
          className: 'social-network-facebook',
          link: 'https://www.facebook.com/maddevsllc'
        },
        {
          className: 'social-network-twitter',
          link: 'https://twitter.com/MadDevsIO'
        },
        {
          className: 'social-network-linkedin',
          link: 'https://www.linkedin.com/company/mad-devs'
        },
        {
          className: 'social-network-instagram',
          link: 'https://www.instagram.com/maddevsio'
        },
        {
          className: 'social-network-medium',
          link: 'https://blog.maddevs.io'
        },
        {
          className: 'social-network-behance',
          link: 'https://www.behance.net/maddevs'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/vars';
	@import '../../assets/styles/_messengerIcons';
	@import '../../assets/styles/_socialNetworkIcons';
	@import '../../assets/styles/_flagsIcons';

	@mixin contacts-head-content {
		&__head-content {
			flex-direction: column;
			margin-bottom: 50px;
		}

		&__contact-item {
			&:last-child {
				margin-top: 50px;
			}
		}
	}

	@mixin messenger-list-grid {
		&__messengers-list {
			display: grid;
			grid-template-columns: repeat(2, max-content);
			padding-bottom: 35px;
		}

		&__messenger-item-wrapper {
			justify-content: flex-start;
		}

		&__messengers-list {
			li {
				&:nth-child(3) {
					margin-left: -8px;
				}
			}
		}
	}

	.footer-contacts {
		&__head-content {
			margin-bottom: 78px;
		}

		&__head-content,
		&__messengers-list,
		&__messenger-item-wrapper,
		&__social-network-list {
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

		&__contact-title-flag,
		&__social-network-item,
		&__messenger-item {
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

		&__messengers-list,
		&__social-network-list {
			li {
				&:first-child {
					margin-left: -8px;
				}
			}
		}

		&__messengers-list {
			margin-bottom: 62px;
			padding-bottom: 62px;
			border-bottom: 1px solid $border-color--grey-dark-transparent;
		}

		&__messenger-item-wrapper {
			align-items: center;
		}

		&__social-network-item-wrapper {
			&:last-child {
				margin-right: -8px;
			}
		}

		&__messenger-name {
			color: $text-color--grey;
		}

		&__messenger-item {
			&::before {
				margin-right: 3px;
			}
		}

		&__messenger-item,
		&__social-network-item {
			&::before {
				width: 42px;
				height: 42px;
			}
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

			&__messenger-item,
			&__social-network-item {
				&::before {
					width: 36px;
					height: 36px;
				}
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		.footer-contacts {
			&__messengers-list {
				margin-bottom: 40px;
				padding-bottom: 40px;
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

			&__social-network-item-wrapper {
				&:last-child {
					margin-right: 0;
				}
			}
		}
	}

	@media only screen and (max-width: 640px) {
		.footer-contacts {
			@include contacts-head-content;
		}
	}

	@media only screen and (max-width: 576px) {
		.footer-contacts {
		  @include messenger-list-grid;
		}
	}
</style>
