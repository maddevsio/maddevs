<template>
  <BaseForm
    id="get-expert-advice-form"
    ref="baseForm"
    button-label="Get expert advice"
    :additional-valid="!$v.validationGroup.$invalid"
    @submit="handleSubmit"
  >
    <div class="modal-field-item field-item">
      <p class="modal-field-name field-name">
        Your questions on IT consulting
      </p>
      <textarea
        v-model="questionsOnItConsulting"
        :class="{ invalid: $v.questionsOnItConsulting.$error }"
        type="text"
        class="modal-entry-field entry-field textarea"
        placeholder="Tell us how we can help you…"
        @input="$v.questionsOnItConsulting.$touch"
      />
      <!-- Erros -->
      <div v-if="$v.questionsOnItConsulting.$dirty">
        <span
          v-if="!$v.questionsOnItConsulting.maxLength"
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
  name: 'GetExpertAdviceForm',
  components: {
    BaseForm,
  },

  mixins: [sendEmailMixin(304641, 'Get Expert Advice')],

  validations: {
    questionsOnItConsulting: {
      maxLength: maxLength(256),
    },

    validationGroup: ['questionsOnItConsulting'],
  },

  data() {
    return {
      questionsOnItConsulting: '',
    }
  },

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...formData,
        questionsOnItConsulting: this.questionsOnItConsulting || '',
      }

      // from mixin
      this.submitEmail(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
      this.$v.$reset()
      this.questionsOnItConsulting = ''
    },
  },
}
</script>
