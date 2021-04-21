import { createNewLead } from '@/api/leads'

export const actions = {
  async createNewLead(_, payload) {
    const data = await createNewLead(this.$axios, payload)
    return data
  },
}
