<template>
	<div class="footer-contacts">
		<div class="footer-contacts__head-content">
			<div class="footer-contacts__contact-item">
				<p class="footer-contacts__contact-title">Text us:</p>
				<a href="mailto:team@maddevs.io" class="footer-contacts__contact-link footer-contacts__contact-mail">team@maddevs.io</a>
			</div>
			<div class="footer-contacts__contact-item">
				<div class="footer-contacts__contact-title-wrapper">
					<div class="footer-contacts__contact-title-flag"></div>
					<p class="footer-contacts__contact-title">Call us:</p>
				</div>
				<a href="tel:+44 20 3984 8555" class="footer-contacts__contact-link footer-contacts__contact-phone-number">+44 20 3984 8555</a>
			</div>
		</div>
		<div class="footer-contacts__lists-wrapper">
			<ul class="footer-contacts__messengers-list">
				<li v-for="(messenger, i) in messengers" :key="i">
					<a :href="messenger.link" target="__blank" class="footer-contacts__messenger-item-wrapper">
						<span class="footer-contacts__messenger-item" :class="`footer-contacts__${messenger.className}`" />
						<p class="footer-contacts__messenger-name">{{ messenger.name }}</p>
					</a>
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
	}

	@mixin messenger-list-grid {
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
			display: block;
			width: 18px;
			height: 14px;
			margin-right: 8px;
			@include flag-uk;
		}

		&__contact-title,
		&__contact-link {
			color: $text-color--white;
		}

		&__contact-link {
			display: inline-block;
			margin-top: 12px;
      font-size: 34px;
      line-height: 100%;
      font-weight: 600;
			font-family: 'Poppins-Medium', sans-serif;
			letter-spacing: -1px;
			border-bottom: 1px solid $text-color--red-opacity;
			text-decoration: none;
		}

		&__messenger-item-wrapper {
			align-items: center;
			text-decoration: none;

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
			margin-top: 53px;
			padding-top: 53px;
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
				font-size: 28px;
			}

			//&__messenger-item {
      //  width: 36px;
      //  height: 36px;
      //}
		}
	}

	@media only screen and (min-width: 768px) and (max-width: 1200px) {
		.footer-contacts {
      &__contact-item {
        margin-bottom: 42px;

        &:last-child {
          margin-top: 0;
          margin-bottom: 0;
        }
      }

			&__social-network-list-desktop {
				margin-top: 35px;
				padding-top: 40px;
			}

			@include contacts-head-content;
		  @include messenger-list-grid;
		}
	}

  @media screen and (max-width: 1100px) {
    .footer-contacts__messengers-list {
      width: max-content;
      display: grid;
      grid-template-columns: repeat(2, max-content);
      grid-column-gap: 70px;
    }
  }

	@media only screen and (max-width: 991px) {
		.footer-contacts {
			&__head-content {
				flex-direction: row;
				margin-bottom: 48px;
        flex-wrap: wrap;
			}

			&__lists-wrapper {
				max-width: 100%;
			}
		}
	}

  @media screen and (max-width: 800px) {
    .footer-contacts__messengers-list {
      grid-column-gap: 60px;
    }
  }

  @media screen and (max-width: 767px) {
    .footer-contacts {
      &__social-network-list-desktop {
        display: none;
      }

      &__contact-item {
        &:last-child {
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    }
  }

	@media only screen and (max-width: 640px) {
		.footer-contacts {
			@include contacts-head-content;
		  @include messenger-list-grid;

      &__contact-item {
        margin-bottom: 33px;
      }

      &__contact-title {
        font-size: 13px;
        line-height: 22px;
      }
		}
	}

  @media screen and (max-width: 600px) {
    .footer-contacts {
      &__messengers-list {
        width: max-content;
        display: grid;
        grid-template-columns: repeat(2, max-content);
        grid-column-gap: 70px;
      }

      &__messenger-item {
        width: 42px;
        height: 42px;
      }
    }
  }

  @media screen and (max-width: 360px) {
    .footer-contacts__messengers-list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, max-content);
        grid-column-gap: 33px;
      }
  }
</style>
