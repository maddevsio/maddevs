<template>
  <BaseForm
    id="order-project-form"
    ref="baseForm"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    button-label="Submit your project"
    :use-company="true"
    :use-description="true"
    @submit="handleSubmit"
  />
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import sendEmailMixin from '@/mixins/sendEmailMixin'
import createNewLeadMixin from '@/mixins/createNewLeadMixin'
import exceptKeys from '@/helpers/exceptKeys'

export default {
  name: 'OrderProjectFromUsForm',
  components: {
    BaseForm,
  },

  mixins: [sendEmailMixin(304632, 'Order Project From Us'), createNewLeadMixin('order-project-from-us')],

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...exceptKeys(formData, 'description'),
        projectDescription: formData.description,
      }

      // from mixin
      this.submitEmail(variables)

      const lead = {
        ...formData,
        description: this.buildLeadDescription('Project description:', formData.description),
      }

      // from mixin
      this.submitLead(lead)
    },

    reset() {
      this.$refs.baseForm.reset()
    },
  },
}
</script>
