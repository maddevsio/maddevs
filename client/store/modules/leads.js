import { sendLead } from '@/api/leads'

export const actions = {
  async sendLead(_, payload) {
    const response = await sendLead(this.$axios, payload)
    return response
  },
}
