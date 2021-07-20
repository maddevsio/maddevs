export const sendEmailWithBase64 = async (axios, payload) => {
  const formData = new FormData()
  formData.append('base64', payload.base64)
  formData.append('payload', JSON.stringify(payload.body))
  try {
    const response = await axios.post('api/send-email', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response
  } catch (error) {
    return error
  }
}
