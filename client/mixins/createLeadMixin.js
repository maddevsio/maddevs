import { mapActions } from 'vuex'
import bowser from 'bowser'
import delay from '@/helpers/delay'
import exceptKeys from '@/helpers/exceptKeys'

const createLeadMixin = (templateId, title = 'Individuals', subject = 'Marketing') => ({
  methods: {
    ...mapActions(['sendLead']),

    async submitLead(variables) {
      let browserName = 'Unknown'
      if (!templateId) throw new Error('Template ID was not provided')
      if (window && window.navigator && window.navigator.userAgent) {
        browserName = bowser.getParser(window.navigator.userAgent).getBrowserName()
      }

      const baseTitle = 'Mad Devs Website Forms'
      const payload = {
        templateId,
        variables: {
          emailTo: process.env.emailContact,
          subject,
          browserName,
          modalTitle: title ? `${baseTitle} - ${title}` : baseTitle,
          projectDescriber: variables.description,
          agreeToGetMadDevsDiscountOffers: variables.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
          agreeWithPrivacyPolicy: variables.agreeWithPrivacyPolicy ? 'Yes' : 'No',
          ...exceptKeys(variables, ['agreeToGetMadDevsDiscountOffers', 'agreeWithPrivacyPolicy', 'description']),
        },
      }
      this.sendLead(payload)
      await delay(500)
      this.reset()
      this.$parent.$emit('success')
    },
  },
})

export default createLeadMixin
