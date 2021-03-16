<template>
	<div class="footer-contacts">
		<div class="footer-contacts__head-content">
			<div class="footer-contacts__contact-item">
				<p class="footer-contacts__contact-title">Text us:</p>
				<a :href="`mailto:${mailLink}`" class="footer-contacts__contact-link footer-contacts__contact-mail">{{mailLink}}</a>
			</div>
			<div class="footer-contacts__contact-item">
				<div class="footer-contacts__contact-title-wrapper">
					<div class="footer-contacts__contact-title-flag">
            <img
              width="19"
              height="14"
              :data-src="require(`@/assets/img/Home/flags/uk.svg`)"
              class="img_lazy"
              alt="United Kingdom"
            >
					</div>
					<p class="footer-contacts__contact-title">Call us:</p>
				</div>
				<a href="tel:+442039848555" class="footer-contacts__contact-link footer-contacts__contact-phone-number">+44 20 3984 8555</a>
			</div>
		</div>
		<div class="footer-contacts__lists-wrapper">
			<ul class="footer-contacts__messengers-list">
				<li>
					<a href="https://m.me/maddevsllc" target="_blank" class="footer-contacts__messenger-item-wrapper">
						<img
              width="42"
              height="42"
              :data-src="require(`@/assets/img/Footer/svg/messenger.svg`)"
              class="img_lazy"
              alt="Messenger"
            >
						<p class="footer-contacts__messenger-name">Messenger</p>
					</a>
				</li>
				<li>
					<a href="https://wa.me/message/KPJAW6J7BF7EK1" target="_blank" class="footer-contacts__messenger-item-wrapper">
            <img
              width="42"
              height="42"
              :data-src="require(`@/assets/img/Footer/svg/whatsapp.svg`)"
              class="img_lazy"
              alt="WhatsApp"
            >
						<p class="footer-contacts__messenger-name">WhatsApp</p>
					</a>
				</li>
				<li>
					<a href="https://t.me/MadDevs_io" target="_blank" class="footer-contacts__messenger-item-wrapper">
						<img
              width="42"
              height="42"
              :data-src="require(`@/assets/img/Footer/svg/telegram.svg`)"
              class="img_lazy"
              alt="Telegram"
            >
						<p class="footer-contacts__messenger-name">Telegram</p>
					</a>
				</li>
				<li>
					<a href="https://msng.link/o/?https%3A%2F%2Fu.wechat.com%2FICWluRgJH8tu0IisMQ1eEFo=wc" target="_blank" class="footer-contacts__messenger-item-wrapper">
            <img
              width="42"
              height="42"
              :data-src="require(`@/assets/img/Footer/svg/wechat.svg`)"
              class="img_lazy"
              alt="WeChat"
            >
						<p class="footer-contacts__messenger-name">WeChat</p>
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
  data: () => ({
    mailLink: process.env.emailContact
  })
};
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/vars';

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
			display: flex;
      align-items: center;
			margin-right: 8px;

      svg {
        width: 18px;
        height: 14px;
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

      img {
        display: block;
        width: 42px;
        height: 42px;
        margin-right: 3px;
      }
		}

		&__messenger-name {
			color: $text-color--grey;
		}

		&__social-network-list-desktop {
			margin-top: 53px;
			padding-top: 53px;
			border-top: 1px solid $border-color--grey-dark-transparent;
		}
	}

	@media only screen and (max-width: 1320px) {
		.footer-contacts {
			&__contact-link {
				font-size: 28px;
			}
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

			&__messenger-telegram {
				margin-left: 2px;
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

        svg {
          width: 42px;
          height: 42px;
        }
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
