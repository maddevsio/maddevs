<template>
	<form class="form"> 
		<div class="fields-list">
			<div class="field-item">
				<p class="field-name">First name and surname</p>
				<input type="text" class="filed-input" placeholder="John Smith">
			</div>
			<div class="field-item">
				<p class="field-name">Work email</p>
				<input type="email" class="filed-input" placeholder="your@company.co|">
			</div>
			<div class="field-item">
				<p class="field-name">Project Info</p>
				<input type="text" class="filed-input" placeholder="Describe your project...">
			</div>
		</div>
		<div class="form-checkboxes">
			<input class="form-checkbox-input" id="privacy-policy" type="checkbox" name="Privacy policy">
  		<label class="form-checkbox-label" for="privacy-policy">I confirm that I have read and accepted Mad Devs’ Privacy Policy.</label>
			<input class="form-checkbox-input" id="marketing-communications" type="checkbox" name="Marketing communications">
  		<label class="form-checkbox-label" for="marketing-communications">I agree to get Mad Devs’ discount offers and other marketing communications.</label>
		</div>
		<buttonTrigger :buttonInnerText="buttonInnerText" />
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
</style>
