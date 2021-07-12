import { mapActions } from 'vuex'

import delay from '@/helpers/delay'
import exceptKeys from '@/helpers/exceptKeys'
import parseUserAgentForLeads from '@/helpers/parseUserAgentForLeads'
import { getIPInfo } from '@/api/ipInfo'

const createLeadMixin = (templateId, title = 'Individuals', subject = 'Marketing') => ({
  methods: {
    ...mapActions(['sendLead']),

    async submitLead(variables) {
      if (!templateId) throw new Error('Template ID was not provided')

      const { userBrowser, userOS, userPlatform } = parseUserAgentForLeads()
      const { ip = 'Unknown', country_name: country = 'Unknown', city = 'Unknown' } = await getIPInfo()

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
          formLocation: variables.formLocation,
          pageUrl: (window && window.location.href) || 'Unknown',
          ip,
          geoIp: `Country: ${country}, City: ${city}`,
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
