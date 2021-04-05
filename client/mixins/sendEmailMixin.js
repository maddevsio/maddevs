import { mapActions } from 'vuex'
import delay from '@/helpers/delay'
import exceptKeys from '@/helpers/exceptKeys'

const sendEmailMixin = (templateId, title = 'Individuals', subject = 'Marketing') => ({
  methods: {
    ...mapActions(['sendEmail']),

    async submitEmail(variables) {
      if (!templateId) throw new Error('Template ID was not provided')

      const baseTitle = 'Mad Devs Website Forms'
      const emailToSent = {
        templateId,
        variables: {
          emailTo: process.env.emailContact,
          subject,
          modalTitle: title ? `${baseTitle} - ${title}` : baseTitle,
          projectDescriber: variables.description,
          agreeToGetMadDevsDiscountOffers: variables.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
          agreeWithPrivacyPolicy: variables.agreeWithPrivacyPolicy ? 'Yes' : 'No',
          ...exceptKeys(variables, ['agreeToGetMadDevsDiscountOffers', 'agreeWithPrivacyPolicy', 'description']),
        },
      }
      this.sendEmail(emailToSent)
      await delay(500)
      this.reset()
      this.$emit('success')
    },
  },
})

export default sendEmailMixin
