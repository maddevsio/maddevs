<template>
  <BaseForm
    id="teams-form"
    ref="baseForm"
    button-class-name="ui-button--transparent-bgc ui-button_submit-button-footer"
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
import createLeadMixin from '@/mixins/createLeadMixin'

import exceptKeys from '@/helpers/exceptKeys'

export default {
  name: 'TeamsForm',
  components: {
    BaseForm,
    RadioList,
  },

  mixins: [createLeadMixin(304637, 'Teams')],

  props: {
    formLocation: {
      type: String,
      default: 'Unknown',
    },
  },

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
        formLocation: this.formLocation,
      }

      // from mixin
      this.submitLead(variables)
    },

    reset() {
      this.$refs.baseForm.reset()
      this.selectedTeamSize = null
    },
  },
}
</script>
