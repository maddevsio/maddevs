<template>
  <BaseForm
    id="contact-me-form"
    ref="baseForm"
    button-label="Сontact Me"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
    :use-company="true"
    @submit="handleSubmit"
  />
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import createLeadMixin from '@/mixins/createLeadMixin'

export default {
  name: 'ContactMeForm',
  components: {
    BaseForm,
  },

  mixins: [createLeadMixin(303792, 'Contact Me')],

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...formData,
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
