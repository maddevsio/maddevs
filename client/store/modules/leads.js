export default {
  actions: {
    async createNewLead(_, payload) {
      try {
        const response = this.$axios.post('api/leads', payload)
        return response.data
      } catch (error) {
        return error
      }
    },
  },
}
