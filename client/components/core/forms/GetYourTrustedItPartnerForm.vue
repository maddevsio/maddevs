<template>
  <BaseForm
    id="get-your-partner-form"
    ref="baseForm"
    button-label="Get your trusted IT partner"
    :additional-valid="!$v.validationGroup.$invalid"
    @submit="handleSubmit"
  >
    <div class="modal-field-item field-item">
      <p class="modal-field-name field-name">
        Expertise you are interested in
      </p>
      <textarea
        v-model="needAssistanceWith"
        :class="{ invalid: $v.needAssistanceWith.$error }"
        type="text"
        class="modal-entry-field entry-field textarea"
        placeholder="I need assistance with..."
        @input="$v.needAssistanceWith.$touch"
      />
      <!-- Erros -->
      <div v-if="$v.needAssistanceWith.$dirty">
        <span
          v-if="!$v.needAssistanceWith.maxLength"
          class="modal-error-text error-text"
        >
          Sorry, the number of characters in this field should not exceed 500.
        </span>
      </div>
      <!-- End Errors -->
    </div>
  </BaseForm>
</template>

<script>
import { maxLength } from 'vuelidate/lib/validators'
import BaseForm from '@/components/core/forms/BaseForm'
import sendEmailMixin from '@/mixins/sendEmailMixin'

export default {
  name: 'GetYourTrustedItPartnerForm',
  components: {
    BaseForm,
  },

  mixins: [sendEmailMixin(304629, 'Get your trusted IT partner')],

  validations: {
    needAssistanceWith: {
      maxLength: maxLength(256),
    },

    validationGroup: ['needAssistanceWith'],
  },

  data() {
    return {
      needAssistanceWith: '',
    }
  },

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...formData,
        needAssistanceWith: this.needAssistanceWith || '',
      }

      // from mixin
      this.submitEmail(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
      this.$v.$reset()
      this.needAssistanceWith = ''
    },
  },
}
</script>
