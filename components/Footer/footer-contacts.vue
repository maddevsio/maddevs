<template>
	<div class="footer-contacts">
		<div class="footer-contacts__call-us">
			<h4 class="footer-contacts__title">Call us:</h4>
			<ul class="footer-contacts__phones-list">
				<li>
					<a href="tel:+1 888 401 3401" class="footer-contacts__phone-item">
						<img src="../../assets/img/Flags/united-states.svg" alt="United States">
						+1 888 401 3401
					</a>
				</li>
				<li>
					<a href="tel:+1 208 473 2904" class="footer-contacts__phone-item">
						<img src="../../assets/img/Flags/united-states.svg" alt="United States">
						+1 208 473 2904
					</a>
				</li>
				<li>
					<a href="tel:+1 888 401 3401" class="footer-contacts__phone-item">
						<img src="../../assets/img/Flags/england.svg" alt="England">
						+1 888 401 3401
					</a>
				</li>
				<li>
					<a href="tel:+1 208 473 2904" class="footer-contacts__phone-item">
						<img src="../../assets/img/Flags/england.svg" alt="England">
						+1 208 473 2904
					</a>
				</li>
			</ul>
		</div>
		<div class="footer-contacts__message-us">
			<h4 class="footer-contacts__title">Message us:</h4>
			<ul class="footer-contacts__messengers-list">
				<li>
					<a href="https://t.me/mun_tamara/" class="footer-contacts__messenger-item" target="_blank">
						<img src="../../assets/img/Footer/telegram.svg" alt="Telegram">
						Telegram
					</a>
				</li>
				<li>
					<a href="http://wa.me/996555771481" class="footer-contacts__messenger-item" target="_blank">
						<img src="../../assets/img/Footer/whatsapp.svg" alt="Whatsapp">
						Whatsapp
					</a>
				</li>
				<li>
					<a href="#" class="footer-contacts__messenger-item">
						<img src="../../assets/img/Footer/signal.svg" alt="Signal">
						Signal
					</a>
				</li>
				<li>
					<a href="#" class="footer-contacts__messenger-item">
						<img src="../../assets/img/Footer/wechat.svg" alt="WeChat">
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
		padding-top: 90px;

		&__title {
			padding-bottom: 19px;
			color: $text-color--grey-light;
			font-family: 'Hoves-Regular';
			font-size: 18px;
			font-weight: 500;
		}

		&__phones-list,
		&__messengers-list {
			display: grid;
			grid-gap: 10px;
		}

		&__phones-list {
			grid-template-columns: repeat(2, 180px);
		}

		&__messengers-list {
			grid-template-columns: repeat(2, 130px);
		}

		&__phone-item,
		&__messenger-item {
			position: relative;
			padding-left: 26px;
			color: $text-color--grey;
			font-family: 'Hoves-Regular';
			text-decoration: none;

			img {
				position: absolute;
				top: 5px;
				left: 0;
			}
		}

		&__phone-item {
			font-size: 20px;
		}

		&__messenger-item {
			font-size: 18px;
		}

		&__message-us {
			padding-left: 111px;
		}
	}

	@media only screen and (max-width: 1390px) {
		.footer-contacts {
			&__message-us {
				padding-left: 60px;
			}
		}
	}

	@media only screen and (max-width: 1180px) {
		.footer-contacts {
			&__phones-list,
			&__messengers-list {
				grid-template-columns: 1fr;
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer-contacts {
			&__phones-list {
				grid-template-columns: repeat(2, 175px);
			}

			&__messengers-list {
				grid-template-columns: repeat(2, 130px);
			}

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
		}
	}

	@media only screen and (max-width: 920px) {
		.footer-contacts {
			&__phones-list,
			&__messengers-list {
				grid-template-columns: 1fr;
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

			&__message-us {
				padding-left: 40px;
			}
		}
	}
</style>
