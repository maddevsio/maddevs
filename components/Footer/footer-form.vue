<template>
	<form class="footer-form form"> 
		<div class="fields-list">
			<div class="field-item">
				<p class="field-name">First name and surname</p>
				<input type="text" class="entry-field" placeholder="John Smith">
			</div>
			<div class="field-item">
				<p class="field-name required">Work email</p>
				<input type="email" required class="entry-field" placeholder="your@company.co|">
			</div>
			<div class="field-item">
				<p class="field-name">Project Info</p>
				<input type="text" class="entry-field" placeholder="Describe your project...">
			</div>
		</div>
		<div class="form-checkboxes">
			<label class="form-checkbox-label required" for="privacy-policy">I confirm that I have read and accepted Mad Devs’ <br> Privacy Policy
				<input class="form-checkbox-input" id="privacy-policy" type="checkbox" name="Privacy policy">
				<span class="checkmark"></span>
			</label>
			<label class="form-checkbox-label" for="marketing-communications">I agree to get Mad Devs’ discount offers and other <br> marketing communications
				<input class="form-checkbox-input" id="marketing-communications" type="checkbox" name="Marketing communications">
				<span class="checkmark"></span>
			</label>
		</div>
		<buttonTrigger :buttonInnerText="buttonInnerText" class="red-text-and-border"/>
	</form>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'footer-form',
  components: {
    buttonTrigger
  },
  data() {
    return {
      buttonInnerText: 'Order a project now'
    };
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

			.field-name,
			.form-checkbox-label {
				font-size: 13px;
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

			.field-name,
			.form-checkbox-label {
				font-size: 16px;
			}
		}
	}
</style>
