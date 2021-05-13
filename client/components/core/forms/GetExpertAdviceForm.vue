<template>
  <BaseForm
    id="get-expert-advice-form"
    ref="baseForm"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    button-label="Get expert advice"
    :additional-valid="!$v.validationGroup.$invalid"
    @submit="handleSubmit"
  >
    <BaseInput
      v-model="questionsOnItConsulting"
      name="questionsOnItConsulting"
      label="Your questions on IT consulting"
      placeholder="Tell us how we can help you…"
      :validation="$v.questionsOnItConsulting"
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
  name: 'GetExpertAdviceForm',
  components: {
    BaseForm,
    BaseInput,
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
