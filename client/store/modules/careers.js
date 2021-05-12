/* eslint-disable no-shadow */
import { getVacancyPost } from '@/api/careers'

export const actions = {
  async getVacancyPost(_, payload = { type: 'vacancy' }) {
    const post = await getVacancyPost(this.$prismic, payload)
    return post
  },
}
