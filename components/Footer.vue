<template>
  <footer class="footer">
    <div class="container">
			<div class="footer__content">
				<div class="footer__text-content">
					<div class="footer__title-wrap">
						<h2 class="footer__main-title main-title">Get In Touch</h2>
						<a class="footer__mailto-link" href="mailto:team@maddevs.io">team@maddevs.io</a>
					</div>
          <footerContacts />
				</div>
				<div class="footer__form-wrap">
					<footerForm />
				</div>
			</div>
			<div class="footer__bottom-links-line">
				<p class="footer__company-name">© MadDevs - 2020</p>
				<div class="footer__left-bottom_links">
					<a href="#" class="footer__bottom-link">GDPR Compliance Commitment</a>
					<a href="#" class="footer__bottom-link">Privacy Policy</a>
					<a href="#" class="footer__bottom-link">Non-Disclosure Agreement (NDA)</a>
				</div>
			</div>
    </div>
  </footer>
</template>

<script>
import footerForm from '@/components/ui/footer-form';
import footerContacts from '@/components/ui/footer-contacts';

export default {
  name: 'Footer',
  components: {
    footerForm,
    footerContacts
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

	.footer {
		padding-top: 129px;
		padding-bottom: 87px;

		&__main-title {
			text-shadow: $text-shadow--white;
		}

		&__mailto-link {
			color: $text-color--red;
			font-size: 70px;
			font-family: 'Hoves-Bold';
			text-decoration: none;
			border-bottom: 1px solid;
		}
	}
</style>
