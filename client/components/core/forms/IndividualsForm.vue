<template>
  <BaseForm
    id="individuals-form"
    ref="baseForm"
    button-label="Get individual proactive rockets"
    :use-description="true"
    @submit="handleSubmit"
  >
    <div class="modal-field-item field-item">
      <p class="modal-field-name field-name">
        Expertise you are interested in
      </p>
      <input
        v-model="expertise"
        type="text"
        class="modal-entry-field entry-field"
        placeholder="React development, Heroku Postgres, etc"
      >
    </div>
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import sendEmailMixin from '@/mixins/sendEmailMixin'
import exceptKeys from '@/helpers/exceptKeys'

export default {
  name: 'IndividualsForm',
  components: {
    BaseForm,
  },

  mixins: [sendEmailMixin(304625, 'Individuals')],

  data() {
    return {
      expertise: '',
    }
  },

  methods: {
    handleSubmit(formData) {
      // from mixin
      this.submitEmail({
        ...exceptKeys(formData, ['description']),
        interestedExpertise: this.expertise || '',
        projectDescription: formData.description,
      })
    },

    reset() {
      this.$refs.baseForm.reset()
      this.expertise = ''
    },
  },
}
</script>
