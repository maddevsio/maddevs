<template>
	<div class="footer-contacts row">
		<div class="footer-contacts__call-us col-xl-5 col-6">
			<h4 class="footer-contacts__title">Call us:</h4>
			<ul class="footer-contacts__phones-list">
				<li>
					<a href="tel:+1 833-MADDEVS" class="footer-contacts__phone-item">
            <span class="footer-contacts__icon footer-contacts__icon--united-states" />
						+1 833-MADDEVS
					</a>
				</li>
				<li>
					<a href="tel:+44 20 3984 8555" class="footer-contacts__phone-item">
            <span class="footer-contacts__icon footer-contacts__icon--uk" />
						+44 20 3984 8555
					</a>
				</li>
			</ul>
		</div>
		<div class="footer-contacts__message-us col-xl-6 col-lg-8 col-md-8 col-6">
			<h4 class="footer-contacts__title">Message us:</h4>
			<ul class="footer-contacts__messengers-list">
				<li>
					<a href="https://facebook.com/maddevsllc" class="footer-contacts__messenger-item" target="_blank">
            <span class="footer-contacts__icon footer-contacts__icon--messenger" />
						Messenger
					</a>
				</li>
				<li>
					<a href="http://wa.me/996555771481" class="footer-contacts__messenger-item" target="_blank">
            <span class="footer-contacts__icon footer-contacts__icon--whatsapp" />
						Whatsapp
					</a>
				</li>
				<li>
					<a href="https://t.me/mun_tamara/" class="footer-contacts__messenger-item" target="_blank">
            <span class="footer-contacts__icon footer-contacts__icon--telegram" />
						Telegram
					</a>
				</li>
				<li>
					<a href="https://msng.link/o/?https%3A%2F%2Fu.wechat.com%2FICWluRgJH8tu0IisMQ1eEFo=wc" class="footer-contacts__messenger-item" target="_blank">
            <span class="footer-contacts__icon footer-contacts__icon--wechat" />
						WeChat
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'footer-contacts'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

	.footer-contacts {
		margin-top: 77px;

		&__title {
			margin-bottom: 18px;
			color: $text-color--grey-light;
			font-family: 'Formular-Regular';
    	font-size: 15px;
			letter-spacing: -0.02em;
		}

    &__icon {
      display: inline-block;
      height: 19px;
      width: 19px;
			background-repeat: no-repeat;
			margin-right: 3px;
			margin-bottom: -5px;

      &--uk {
        background-image: url(../../assets/img/Flags/united-kingdom.svg);
			}
			
			&--united-states {
        background-image: url(../../assets/img/Flags/united-states.svg);
			}

      &--messenger {
        background-image: url(../../assets/img/Footer/messenger.svg);
      }

      &--whatsapp {
        background-image: url(../../assets/img/Footer/whatsapp.svg);
      }

      &--telegram {
				margin-bottom: -8px;
				background-image: url(../../assets/img/Footer/telegram.svg);
      }

      &--wechat {
        background-image: url(../../assets/img/Footer/wechat.svg);
      }
		}

		&__phones-list,
		&__messengers-list {
			display: grid;
			grid-gap: 10px;
		}

		&__phones-list {
			grid-template-columns: repeat(1, 1fr);
		}

		&__messengers-list {
			grid-template-columns: repeat(2, 1fr);
		}

		&__phone-item,
		&__messenger-item {
			position: relative;
			color: $text-color--grey;
			font-family: 'Poppins-Regular';
			font-size: 16px;
			text-decoration: none;
			letter-spacing: -0.02em;

			img {
				position: absolute;
				top: 5px;
				left: 0;
			}
		}

		&__phone-item,
		&__messenger-item {
    	display: block;
			width: max-content;
		}
	}

	@media only screen and (max-width: 1199px) {
		.footer-contacts {
			&__message-us {
				margin-top: 47px;
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer-contacts {
			flex-direction: column;
			margin-top: 43px;

			&__phone-item,
			&__messenger-item,
			&__title {
				font-size: 12px;
			}

			&__title {
				margin-bottom: 12px;
			}

	    &__icon {
				margin-bottom: -7px;

				 &--telegram {
					margin-bottom: -10px;
				}
			}
		}
	}

	@media only screen and (max-width: 767px) {
		.footer-contacts {
			flex-direction: row-reverse;

			&__messengers-list {
				grid-template-columns: repeat(1, 1fr);
			}

			&__message-us {
				margin-top: 0;
			}

			&__phone-item,
			&__messenger-item,
			&__title {
				font-size: 14px;
			}
		}
	}
</style>
