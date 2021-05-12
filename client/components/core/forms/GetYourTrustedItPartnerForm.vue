<template>
  <BaseForm
    id="get-your-partner-form"
    ref="baseForm"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    button-label="Get your trusted IT partner"
    :additional-valid="!$v.validationGroup.$invalid"
    @submit="handleSubmit"
  >
    <BaseInput
      v-model="needAssistanceWith"
      name="questionsOnItConsulting"
      label="Expertise you are interested in"
      placeholder="I need assistance with..."
      :validation="$v.needAssistanceWith"
      element-type="textarea"
    />
  </BaseForm>
</template>

<script>
import { maxLength } from 'vuelidate/lib/validators'
import BaseForm from '@/components/core/forms/BaseForm'
import BaseInput from '@/components/core/forms/BaseInput'
import sendEmailMixin from '@/mixins/sendEmailMixin'

export default {
  name: 'GetYourTrustedItPartnerForm',
  components: {
    BaseForm,
    BaseInput,
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
