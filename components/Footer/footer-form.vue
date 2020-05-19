<template>
	<form class="footer-form form"> 
		<div class="fields-list">
			<div class="field-item">
				<p class="field-name">First name and surname</p>
				<input type="text" class="entry-field" placeholder="John Smith">
			</div>
			<div class="field-item">
				<p class="field-name required">Work email</p>
				<input type="email" required class="entry-field" placeholder="your@company.com">
			</div>
			<div class="field-item">
				<p class="field-name">Project Info</p>
				<input type="text" class="entry-field" placeholder="Describe your project...">
			</div>
		</div>
		<formCheckboxes
			v-on:getPrivacyCheckboxState="getPrivacyCheckboxState($event)"
			v-on:getDiscountOffersCheckboxState="getDiscountOffersCheckboxState($event)"
		/>
		<button class="button-default red-text-and-border" :class="{'disabled': !agreeWithPrivacyPolicy}">Order a project now</button>
	</form>
</template>

<script>
import formCheckboxes from '@/components/ui/form-checkboxes';

export default {
  name: 'footer-form',
  components: {
    formCheckboxes
  },
  data: () => ({
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false
  }),
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

	.footer-form {
		width: 450px;
	}

	@media only screen and (max-width: 1420px) {
		.footer-form {
			width: 390px;
		}
	}

	@media only screen and (max-width: 1320px) {
		.footer-form {
			width: 320px;

			/deep/.form-checkbox-label {
				br {
					display: none;
				}
			}
		}
	}

	@media only screen and (max-width: 1150px) {
		.footer-form {
			width: 340px;

			button {
				font-size: 17px;
			}

      .entry-field {
        font-size: 17px;
      }
		}
	}

	@media only screen and (max-width: 1024px) {
		.footer-form {
			width: 100%;
		}
	}
</style>
