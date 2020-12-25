<template>
  <div class="form-checkboxes">
    <label class="form-checkbox-label required" :for="`privacy-policy-${inputId}`">I confirm that I have read and accepted <span>Mad Devs’</span> <a href="/privacy" target="_blank">Privacy Policy</a>
      <input
        ref="privacyPolicy"
        class="form-checkbox-input"
        :id="`privacy-policy-${inputId}`" 
        type="checkbox"
        name="Privacy policy"
        @click="privacyCheckboxChangeState($event)"
      >
      <span class="checkmark"></span>
    </label>
    <label class="form-checkbox-label" :for="`marketing-communications-${inputId}`">I agree to get <span>Mad Devs’</span> discount offers and other marketing communications.
      <input
        ref="marketingCommunications"
        class="form-checkbox-input"
        :id="`marketing-communications-${inputId}`"
        type="checkbox"
        name="Marketing communications"
        @click="discountOffersCheckboxChangeState($event)"
      >
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormCheckboxes',
  props: {
    inputId: {
      type: String,
      default: 'input-id'
    }
  },
  methods: {
    privacyCheckboxChangeState(e) {
      this.$emit('getPrivacyCheckboxState', e.target.checked);
    },
    discountOffersCheckboxChangeState(e) {
      this.$emit('getDiscountOffersCheckboxState', e.target.checked);
    },
    reset() {
      this.$refs.privacyPolicy.checked = false;
      this.$refs.marketingCommunications.checked = false;
    }
  }
};
</script>
