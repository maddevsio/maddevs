export const createNewLead = async (axios, payload) => {
  try {
    const response = await axios.post('api/leads', payload)
    return response.data
  } catch (error) {
    return error
  }
}
