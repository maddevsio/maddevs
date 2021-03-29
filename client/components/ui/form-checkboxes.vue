<template>
  <div class="form-checkboxes">
    <label :for="`privacy-policy-${inputId}`" class="form-checkbox-label required"
      >I confirm that I have read and accepted
      <div>Mad Devs’</div>
      <a href="/privacy/" target="_blank">Privacy Policy</a>
      <input
        :id="`privacy-policy-${inputId}`"
        ref="privacyPolicy"
        class="form-checkbox-input"
        data-testid="test-privacy-policy-checkbox-input"
        type="checkbox"
        name="Privacy policy"
        @click="privacyCheckboxChangeState($event)"
      />
      <div class="checkmark"></div>
    </label>
    <label :for="`marketing-communications-${inputId}`" class="form-checkbox-label"
      >I agree to get
      <div>Mad Devs’</div>
      discount offers and other marketing communications.
      <input
        :id="`marketing-communications-${inputId}`"
        ref="marketingCommunications"
        class="form-checkbox-input"
        data-testid="test-form-checkbox-input"
        type="checkbox"
        name="Marketing communications"
        @click="discountOffersCheckboxChangeState($event)"
      />
      <div class="checkmark"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormCheckboxes',
  props: {
    inputId: {
      type: String,
      default: 'input-id',
    },
  },

  methods: {
    privacyCheckboxChangeState(e) {
      this.$emit('getPrivacyCheckboxState', e.target.checked)
    },

    discountOffersCheckboxChangeState(e) {
      this.$emit('getDiscountOffersCheckboxState', e.target.checked)
    },

    reset() {
      this.$refs.privacyPolicy.checked = false
      this.$refs.marketingCommunications.checked = false
    },
  },
}
</script>
