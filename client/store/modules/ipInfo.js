import { getIPInfo } from '@/api/ipinfo'

export const actions = {
  async getIPInfo() {
    const response = await getIPInfo(this.$axios)
    return response
  },
}
