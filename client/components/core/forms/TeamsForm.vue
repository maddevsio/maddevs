<template>
  <BaseForm
    id="teams-form"
    ref="baseForm"
    button-label="Get a team of ultra fast coders"
    :use-description="true"
    @submit="handleSubmit"
  >
    <RadioList
      id="teams"
      label="Expected team size"
      :options="options"
      :required="true"
      @select="handleSelectTeamSize"
    />
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/core/forms/BaseForm'
import RadioList from '@/components/shared/UIRadioList'
import sendEmailMixin from '@/mixins/sendEmailMixin'
import createNewLeadMixin from '@/mixins/createNewLeadMixin'
import exceptKeys from '@/helpers/exceptKeys'

export default {
  name: 'TeamsForm',
  components: {
    BaseForm,
    RadioList,
  },

  mixins: [sendEmailMixin(304637, 'Teams'), createNewLeadMixin('teams')],

  data() {
    return {
      selectedTeamSize: null,
      options: [
        {
          value: 'less-five',
          label: 'Less than 5',
        },
        {
          value: 'from-five-to-ten',
          label: 'From 5 to 10',
        },
        {
          value: 'more-than-ten',
          label: 'More than 10',
        },
      ],
    }
  },

  methods: {
    handleSelectTeamSize(teamSize) {
      this.selectedTeamSize = teamSize
    },

    handleSubmit(formData) {
      const variables = {
        ...exceptKeys(formData, ['description']),
        selectedTeamSize: this.selectedTeamSize ? this.selectedTeamSize.label || '' : '',
        projectDescription: formData.description,
      }

      // from mixin
      this.submitEmail(variables)

      const lead = {
        ...formData,
        description: this.buildLeadDescription('Project description and team size:', `
          Project description: ${formData.description};
          Team size: ${variables.selectedTeamSize};
        `),
      }

      // from mixin
      this.submitLead(lead)
    },

    reset() {
      this.$refs.baseForm.reset()
      this.selectedTeamSize = null
    },
  },
}
</script>
