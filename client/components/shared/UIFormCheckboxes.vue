<template>
  <div class="form-checkboxes">
    <label :for="`privacy-policy-${id}`" class="form-checkbox-label required"
      >I confirm that I have read and accepted
      <div>Mad Devs’</div>
      <a href="/privacy/" target="_blank">Privacy Policy</a>
      <input
        :id="`privacy-policy-${id}`"
        v-model="privacy"
        class="form-checkbox-input"
        data-testid="test-privacy-policy-checkbox-input"
        type="checkbox"
        name="Privacy policy"
        @change="handleChange($event, 'privacy')"
      />
      <div class="checkmark"></div>
    </label>
    <label :for="`marketing-communications-${id}`" class="form-checkbox-label"
      >I agree to get
      <div>Mad Devs’</div>
      discount offers and other marketing communications.
      <input
        :id="`marketing-communications-${id}`"
        v-model="discountOffers"
        class="form-checkbox-input"
        data-testid="test-form-checkbox-input"
        type="checkbox"
        name="Marketing communications"
        @change="handleChange($event, 'discountOffers')"
      />
      <div class="checkmark"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'UIFormCheckboxes',
  props: {
    id: {
      type: String,
      default: 'input-id',
    },
  },

  data() {
    return {
      privacy: false,
      discountOffers: false,
    }
  },

  methods: {
    handleChange(event, type) {
      const { checked } = event.target

      const emittedData = {
        privacy: type === 'privacy' ? checked : this.privacy,
        discountOffers: type === 'discountOffers' ? checked : this.discountOffers,
      }

      this.$emit('change', emittedData)
    },

    reset() {
      this.privacy = false
      this.discountOffers = false
    },
  },
}
</script>
