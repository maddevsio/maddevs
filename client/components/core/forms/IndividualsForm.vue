<template>
  <BaseForm
    id="individuals-form"
    ref="baseForm"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    button-label="Get individual proactive rockets"
    :use-description="true"
    @submit="handleSubmit"
  >
    <BaseInput
      v-model="expertise"
      name="questionsOnItConsulting"
      label="Expertise you are interested in"
      placeholder="React development, Heroku Postgres, etc"
    />
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import BaseInput from '@/components/core/forms/BaseInput'
import sendEmailMixin from '@/mixins/sendEmailMixin'

import exceptKeys from '@/helpers/exceptKeys'

export default {
  name: 'IndividualsForm',
  components: {
    BaseForm,
    BaseInput,
  },

  mixins: [sendEmailMixin(304625, 'Individuals')],

  data() {
    return {
      expertise: '',
    }
  },

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...exceptKeys(formData, ['description']),
        interestedExpertise: this.expertise || '',
        projectDescription: formData.description,
      }

      // from mixin
      this.submitEmail(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
      this.expertise = ''
    },
  },
}
</script>
