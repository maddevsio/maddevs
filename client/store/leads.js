import { createNewLead } from '@/api/leads'

export const actions = {
  async createNewLead(_, payload) {
    const data = await createNewLead(payload, this.$axios)
    return data
  },
}
