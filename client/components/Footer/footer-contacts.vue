<template>
	<div class="footer-contacts">
		<div class="footer-contacts__call-us">
			<h4 class="footer-contacts__title">Call us:</h4>
			<ul class="footer-contacts__phones-list">
				<li>
					<a href="tel:+1 833-MADDEVS" class="footer-contacts__phone-item footer-contacts__phone-item--flag">
						<span class="footer-contacts__icon footer-contacts__icon--usa"/>
						+1 833-MADDEVS
					</a>
				</li>
				<li>
					<a href="tel:+44 20 3984 8555" class="footer-contacts__phone-item footer-contacts__phone-item--flag">
						<span class="footer-contacts__icon footer-contacts__icon--uk"/>
						+44 20 3984 8555
					</a>
				</li>
			</ul>
		</div>
		<div class="footer-contacts__message-us">
			<h4 class="footer-contacts__title">Message us:</h4>
			<ul class="footer-contacts__messengers-list">
				<li>
					<a href="https://facebook.com/maddevsllc" class="footer-contacts__messenger-item" target="_blank">
						<span class="footer-contacts__message footer-contacts__message--messenger"/>
						Messenger
					</a>
				</li>
				<li>
					<a href="http://wa.me/996555771481" class="footer-contacts__messenger-item" target="_blank">
						<span class="footer-contacts__message footer-contacts__message--whatsapp"/>
						Whatsapp
					</a>
				</li>
				<li>
					<a href="https://t.me/mun_tamara/" class="footer-contacts__messenger-item" target="_blank">
						<span class="footer-contacts__message footer-contacts__message--telegram" />
						Telegram
					</a>
				</li>
				<li>
					<a href="https://msng.link/o/?https%3A%2F%2Fu.wechat.com%2FICWluRgJH8tu0IisMQ1eEFo=wc" class="footer-contacts__messenger-item" target="_blank">
						<span class="footer-contacts__message footer-contacts__message--wechat" />
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
  @import '../../assets/styles/get-vw';

	.footer-contacts {
		display: flex;
		margin-top: get-vw(123px);

    &__message {
      display: inline-block;
      height: 1vw;
      width: 2vw;
      background-repeat: no-repeat;
      margin: 0;
      background-size: contain;
      &--whatsapp {
        background-image: url(../../assets/img/Footer/whatsapp.svg);
      }
      &--messenger {
        background-image: url(../../assets/img/Footer/messenger.svg);
      }
      &--telegram {
        background-image: url(../../assets/img/Footer/telegram.svg);
      }
      &--wechat {
        background-image: url(../../assets/img/Footer/wechat.svg);
      }
    }

    &__icon {
      display: inline-block;
      height: 1vw;
      width: 2vw;
      background-repeat: no-repeat;
      margin: 0;
      background-size: contain;
      &--uk {
        background-image: url(../../assets/img/Flags/united-kingdom.svg);
      }

      &--usa {
        background-image: url(../../assets/img/Flags/united-states.svg);
      }
    }

		&__title {
			padding-bottom: get-vw(19px);
			color: $text-color--grey-light;
			font-family: 'Hoves-Bold';
    	font-size: get-vw(27px);
			font-weight: 500;
			letter-spacing: -1px;
		}

		&__phones-list,
		&__messengers-list {
			display: grid;
			grid-gap: get-vw(10px);
		}

		&__phones-list {
			grid-template-columns: repeat(1, 1fr);
		}

		&__messengers-list {
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: get-vw(84px);
		}

		&__phone-item,
		&__messenger-item {
			position: relative;
			color: $text-color--grey;
			font-family: 'Hoves-Bold';
			font-size: 22px;
			text-decoration: none;
			letter-spacing: -1px;
      display: flex;
      align-items: center;

			img {
				position: absolute;
				top: 5px;
				left: 0;
			}
		}

		&__message-us {
			margin-left: get-vw(133px);
		}
	}

	@media only screen and (max-width: 1320px) {
		.footer-contacts {
			margin-top: get-vw(77px);

			&__message-us {
				margin-left: get-vw(88px);
			}
		}
	}

	@media only screen and (max-width: 1220px) {
		.footer-contacts {
			flex-direction: column;
			margin-top: get-vw(64px);

			&__message-us {
				margin-top: get-vw(40px);
				margin-left: 0;
			}

			&__messengers-list {
				grid-template-columns: repeat(2, get-vw(218px));
				grid-column-gap: 0;
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer-contacts {
			&__title {
				padding-bottom: get-vw(7px);
        font-size: 4vw;
      }
		}
	}

	@media only screen and (max-width: 960px) {
		.footer-contacts {
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: get-vw(60px);

			&__message-us {
				margin-top: 0;
			}

			&__messengers-list {
				grid-template-columns: repeat(2, 1fr);
				grid-column-gap: get-vw(54px);
			}
		}
	}

	@media only screen and (max-width: 680px) {
		.footer-contacts {
			&__messengers-list {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}

	@media only screen and (max-width: 520px) {
		.footer-contacts {
			flex-direction: column;

      &__icon {
        height: 4vw;
        width: 6vw;
      }

      &__message {
        height: 3vw;
        width: 5vw;
      }

			&__messengers-list {
				grid-template-columns: repeat(2, 1fr);
				grid-column-gap: 0;
			}

			&__message-us {
				margin-top: get-vw(30px);
			}

			&__messenger-item,
			&__phone-item {
				font-size: 4vw;
			}
		}
	}

	@media only screen and (max-width: 420px) {
		.footer-contacts {
			margin-top: 50px;
			margin-bottom: 80px;

      &__title {
        padding-bottom: 3.5vw;
        font-size: 6vw;
      }

      &__phones-list,
      &__messengers-list {
        display: grid;
        grid-gap: 2.5vw;
        margin-bottom: 8vw;
      }

      &__messenger-item,
      &__phone-item {
        font-size: 5vw;
      }

      &__message {
        height: 4.5vw;
        width: 7vw;
      }
		}
	}

	@media only screen and (max-width: 370px) {
		.footer-contacts {
			margin-top: get-vw(37px);
			margin-bottom: get-vw(58px);
		}
	}
</style>
