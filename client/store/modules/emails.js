import { sendEmail } from '@/api/emails'

export const actions = {
  async sendEmail(_, payload) {
    const response = await sendEmail(this.$axios, payload)
    return response
  },
}
