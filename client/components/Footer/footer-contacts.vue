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
			margin-left: 133px;
		}
	}

	@media only screen and (max-width: 1320px) {
		.footer-contacts {
			margin-top: 77px;

			&__message-us {
				margin-left: 88px;
			}
		}
	}

	@media only screen and (max-width: 1220px) {
		.footer-contacts {
			flex-direction: column;
			margin-top: 64px;

			&__message-us {
				margin-top: 40px;
				margin-left: 0;
			}

			&__messengers-list {
				grid-template-columns: repeat(2, 218px);
				grid-column-gap: 0;
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer-contacts {
			&__title {
				padding-bottom: 7px;
				font-size: 24px;
			}
		}
	}

	@media only screen and (max-width: 960px) {
		.footer-contacts {
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 60px;

			&__message-us {
				margin-top: 0;
			}

			&__messengers-list {
				grid-template-columns: repeat(2, 1fr);
				grid-column-gap: 54px;
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

			&__messengers-list {
				grid-template-columns: repeat(2, 1fr);
				grid-column-gap: 0;
			}

			&__message-us {
				margin-top: 30px;
			}

			&__messenger-item,
			&__phone-item {
				font-size: 20px;
			}
		}
	}

	@media only screen and (max-width: 420px) {
		.footer-contacts {
			margin-top: 50px;
			margin-bottom: 80px;
		}
	}

	@media only screen and (max-width: 370px) {
		.footer-contacts {
			margin-top: 37px;
			margin-bottom: 58px;
		}
	}
</style>
