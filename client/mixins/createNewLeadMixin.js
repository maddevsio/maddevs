import { mapActions } from 'vuex'
import exceptKeys from '@/helpers/exceptKeys'

const createNewLeadMixin = type => ({
  methods: {
    ...mapActions(['createNewLead']),

    async submitLead(variables) {
      if (!type) throw new Error('Lead type was not provided')
      const lead = {
        fullname: variables.fullName,
        phone: variables.phoneNumber,
        ...exceptKeys(variables, ['fullName', 'phoneNumber', 'agreeToGetMadDevsDiscountOffers', 'agreeWithPrivacyPolicy']),
        type,
      }

      this.createNewLead(lead)
    },
  },
})

export default createNewLeadMixin
