<template>
  <div class="form-checkboxes">
    <label class="form-checkbox-label required" :for="firstCheckboxId">I confirm that I have read and accepted Mad Devs’ <br> Privacy Policy
      <input 
        class="form-checkbox-input"
        :id="firstCheckboxId" 
        type="checkbox"
        name="Privacy policy"
        @click="privacyCheckboxChangeState($event)"
      >
      <span class="checkmark"></span>
    </label>
    <label class="form-checkbox-label" :for="secondCheckboxId">I agree to get Mad Devs’ discount offers and other <br> marketing communications
      <input 
        class="form-checkbox-input"
        :id="secondCheckboxId"
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
    firstCheckboxId: {
      type: String,
      default: 'Checkbox Id'
    },
    secondCheckboxId: {
      type: String,
      default: 'Checkbox Id'
    }
  },
  methods: {
    privacyCheckboxChangeState(e) {
      this.$emit('getPrivacyCheckboxState', e.target.checked);
    },
    discountOffersCheckboxChangeState(e) {
      this.$emit('getDiscountOffersCheckboxState', e.target.checked);
    }
  }
};

</script>
