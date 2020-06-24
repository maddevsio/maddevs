<template>
	<div class="footer-contacts">
		<div class="footer-contacts__call-us">
			<h4 class="footer-contacts__title">Call us:</h4>
			<ul class="footer-contacts__phones-list">
				<li>
					<a href="tel:+1 888 401 3401" class="footer-contacts__phone-item">
						<img src="@/assets/img/Flags/united-states.svg" alt="United States">
						+1 833-MADDEVS
					</a>
				</li>
				<li>
					<a href="tel:+1 888 401 3401" class="footer-contacts__phone-item">
						<img src="@/assets/img/Flags/united-kingdom.svg" alt="United Kingdom">
						+44 20 3984 8555
					</a>
				</li>
			</ul>
		</div>
		<div class="footer-contacts__message-us">
			<h4 class="footer-contacts__title">Message us:</h4>
			<ul class="footer-contacts__messengers-list">
				<li>
					<a href="http://m.me/maddevsllc" class="footer-contacts__messenger-item" target="_blank">
						<img src="@/assets/img/Footer/messenger.svg" alt="Messenger">
						Messenger
					</a>
				</li>
				<li>
					<a href="http://wa.me/996555771481" class="footer-contacts__messenger-item" target="_blank">
						<img src="@/assets/img/Footer/whatsapp.svg" alt="Whatsapp">
						Whatsapp
					</a>
				</li>
				<li>
					<a href="https://t.me/mun_tamara/" class="footer-contacts__messenger-item" target="_blank">
						<img src="@/assets/img/Footer/telegram.svg" alt="Telegram">
						Telegram
					</a>
				</li>
				<li>
					<a href="#" class="footer-contacts__messenger-item">
						<img src="@/assets/img/Footer/wechat.svg" alt="WeChat">
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
		display: flex;
		margin-top: 123px;

		&__title {
			padding-bottom: 19px;
			color: $text-color--grey-light;
			font-family: 'Hoves-Bold';
    	font-size: 27px;
			font-weight: 500;
			letter-spacing: -1px;
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
			grid-column-gap: 84px;
		}

		&__phone-item,
		&__messenger-item {
			position: relative;
			padding-left: 26px;
			color: $text-color--grey;
			font-family: 'Hoves-Bold';
			font-size: 22px;
			text-decoration: none;
			letter-spacing: -1px;

			img {
				position: absolute;
				top: 5px;
				left: 0;
			}
		}

		&__message-us {
			padding-left: 133px;
		}
	}

	@media only screen and (max-width: 1180px) {
		.footer-contacts {
			&__messengers-list {
				grid-template-columns: 1fr;
			}

			&__message-us {
				padding-left: 0;
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer-contacts {
			justify-content: space-between;

			&__phone-item {
				font-size: 18px;
			}

			&__messenger-item,
			&__title {
				font-size: 17px;
			}

			&__phone-item,
			&__messenger-item {
				img {
					top: 4px;
				}
			}

			&__messengers-list {
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}

	@media only screen and (max-width: 576px) {
		.footer-contacts {
			flex-direction: column;

			&__phone-item,
			&__messenger-item {
				top: 3px;
				font-size: 16px;
			}

			&__phones-list  {
				padding-bottom: 25px;
			}
		}
	}

	@media only screen and (max-width: 370px) {
		.footer-contacts {
			&__phone-item,
			&__messenger-item {
				top: 3px;
				font-size: 16px;
			}
		}
	}
</style>
