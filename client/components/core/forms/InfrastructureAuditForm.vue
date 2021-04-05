<template>
  <BaseForm
    id="infrastructure-audit-form"
    ref="baseForm"
    button-label="Get an infrastructure audit"
    :use-company="true"
    @submit="handleSubmit"
  >
    <RadioList
      id="infrastructure-audit"
      label="Where is your project hosted?"
      :options="options"
      :required="false"
      @select="handleSelectProjectHost"
    />
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import RadioList from '@/components/shared/UIRadioList'
import sendEmailMixin from '@/mixins/sendEmailMixin'

export default {
  name: 'InfrastructureAuditForm',
  components: {
    BaseForm,
    RadioList,
  },

  mixins: [sendEmailMixin(304628, 'Infrastructure audit')],

  data() {
    return {
      selectedProjectHost: null,
      options: [
        {
          value: 'on-premises',
          label: 'On-premises',
        },
        {
          value: 'amazon',
          label: 'Amazon Web Services',
        },
        {
          value: 'google-cloud',
          label: 'Google Cloud Platform',
        },
        {
          value: 'microsoft-azure',
          label: 'Microsoft Azure',
        },
        {
          value: 'heroku',
          label: 'Heroku',
        },
        {
          value: 'digital-ocean',
          label: 'Digital Ocean',
        },
        {
          value: 'other',
          label: 'Other',
        },
      ],
    }
  },

  methods: {

    handleSelectProjectHost(projectHost) {
      this.selectedProjectHost = projectHost
    },

    handleSubmit(formData) {
      const variables = {
        ...formData,
        selectedProjectHost: this.selectedProjectHost ? this.selectedProjectHost.label || '' : '',
      }

      // from mixin
      this.submitEmail(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
      this.selectedProjectHost = null
    },
  },
}
</script>
