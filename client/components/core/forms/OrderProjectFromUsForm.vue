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
import createLeadMixin from '@/mixins/createLeadMixin'

import exceptKeys from '@/helpers/exceptKeys'

export default {
  name: 'OrderProjectFromUsForm',
  components: {
    BaseForm,
  },

  mixins: [createLeadMixin(304632, 'Order Project From Us')],

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...exceptKeys(formData, 'description'),
        projectDescription: formData.description,
      }

      // from mixin
      this.submitLead(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
    },
  },
}
</script>
