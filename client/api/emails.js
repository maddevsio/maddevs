export const sendEmail = async (axios, payload) => {
  try {
    const response = await axios.post('api/send-email', payload)
    return response
  } catch (error) {
    return error
  }
}
