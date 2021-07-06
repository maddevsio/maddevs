import { mapActions } from 'vuex'
import bowser from 'bowser'
import delay from '@/helpers/delay'
import exceptKeys from '@/helpers/exceptKeys'

const createLeadMixin = (templateId, title = 'Individuals', subject = 'Marketing') => ({
  methods: {
    ...mapActions(['sendLead']),

    async submitLead(variables) {
      if (!templateId) throw new Error('Template ID was not provided')

      let userBrowser = 'Unknown'
      let userOS = 'Unknown'
      let userPlatform = 'Unknown'
      if (window && window.navigator && window.navigator.userAgent) {
        const { browser, os, platform } = bowser.parse(window.navigator.userAgent)

        userBrowser = `name: ${browser.name}, version: ${browser.version}`
        userOS = `name: ${os.name}, version: ${os.version}, versionName: ${os.versionName}`
        userPlatform = `type: ${platform.type}, vendor: ${platform.vendor}`
      }

      const baseTitle = 'Mad Devs Website Forms'
      const payload = {
        templateId,
        variables: {
          emailTo: process.env.emailContact,
          subject,
          modalTitle: title ? `${baseTitle} - ${title}` : baseTitle,
          projectDescriber: variables.description,
          agreeToGetMadDevsDiscountOffers: variables.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
          agreeWithPrivacyPolicy: variables.agreeWithPrivacyPolicy ? 'Yes' : 'No',
          userBrowser,
          userOS,
          userPlatform,
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
