export const createNewLead = async (payload, axios) => {
  try {
    const response = axios.post('api/leads', payload)
    return response.data
  } catch (error) {
    return error
  }
}
