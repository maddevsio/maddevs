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
import sendEmailMixin from '@/mixins/sendEmailMixin'

export default {
  name: 'ContactMeForm',
  components: {
    BaseForm,
  },

  mixins: [sendEmailMixin(303792, 'Contact Me')],

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...formData,
      }

      // from mixin
      this.submitEmail(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
    },
  },
}
</script>
