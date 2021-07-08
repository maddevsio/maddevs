import { getIPInfo } from '@/api/ipInfo'

export const actions = {
  async getIPInfo() {
    const response = await getIPInfo(this.$axios)
    return response.data
  },
}
