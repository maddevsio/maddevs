export const sendLead = async (axios, payload) => {
  try {
    const response = await axios.post('api/leads', payload)
    return response
  } catch (error) {
    return error
  }
}
