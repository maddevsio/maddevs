<template>
	<div class="footer-contacts">
		<div class="footer-contacts__call-us">
			<div class="footer-contacts__title">Call us:</div>
			<ul class="footer-contacts__phones-list">
				<li>
					<a href="tel:+1 888 401 3401" class="footer-contacts__phone-item united-states">+1 888 401 3401</a>
				</li>
				<li>
					<a href="tel:+1 208 473 2904" class="footer-contacts__phone-item united-states">+1 208 473 2904</a>
				</li>
				<li>
					<a href="tel:+1 888 401 3401" class="footer-contacts__phone-item england">+1 888 401 3401</a>
				</li>
				<li>
					<a href="tel:+1 208 473 2904" class="footer-contacts__phone-item england">+1 208 473 2904</a>
				</li>
			</ul>
		</div>
		<div class="footer-contacts__message-us">
			<div class="footer-contacts__title">Message us:</div>
			<ul class="footer-contacts__messengers-list">
				<li>
					<a href="#" class="footer-contacts__messenger-item footer-contacts__telegram">Telegram</a>
				</li>
				<li>
					<a href="#" class="footer-contacts__messenger-item footer-contacts__whatsapp">Whatsapp</a>
				</li>
				<li>
					<a href="#" class="footer-contacts__messenger-item footer-contacts__skype">Skype</a>
				</li>
				<li>
					<a href="#" class="footer-contacts__messenger-item footer-contacts__we-chat">WeChat</a>
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
  @import '../../assets/styles/_vars';

	.footer-contacts {
		display: flex;
		padding-top: 90px;

		&__title {
			padding-bottom: 19px;
			color: $text-color--grey-light;
			font-family: 'Hoves-Regular';
			font-size: 18px;
		}

		&__phones-list,
		&__messengers-list {
			display: grid;
			grid-template-columns: 175px 175px;
			grid-gap: 10px;
		}

		&__phone-item,
		&__messenger-item {
			padding-left: 26px;
			color: $text-color--grey;
			font-family: 'Hoves-Regular';
			text-decoration: none;
		}

		&__phone-item {
			font-size: 20px;
			background-position-y: 5px;
		}

		&__message-us {
			padding-left: 111px;
		}

		&__messengers-list {
			font-size: 18px;

			a {
				background-position-y: 4px;
			}
		}

		&__telegram {
			background: url('../../assets/img/Footer/telegram.svg') no-repeat;
		}

		&__skype {
			background: url('../../assets/img/Footer/skype.svg') no-repeat;
		}

		&__whatsapp {
			background: url('../../assets/img/Footer/whatsapp.svg') no-repeat;
		}

		&__we-chat {
			background: url('../../assets/img/Footer/wechat.svg') no-repeat;
		}
	}
</style>
