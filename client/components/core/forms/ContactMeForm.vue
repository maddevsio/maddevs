<template>
  <BaseForm
    id="contact-me-form"
    ref="baseForm"
    button-label="Сontact Me"
    :use-company="true"
    @submit="handleSubmit"
  />
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import sendEmailMixin from '@/mixins/sendEmailMixin'
import createNewLeadMixin from '@/mixins/createNewLeadMixin'

export default {
  name: 'ContactMeForm',
  components: {
    BaseForm,
  },

  mixins: [sendEmailMixin(303792, 'Contact Me'), createNewLeadMixin('contact-me')],

  methods: {
    handleSubmit(formData) {
      const variables = {
        ...formData,
      }

      // from mixin
      this.submitLead(variables)

      // from mixin
      this.submitEmail(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
    },
  },
}
</script>
