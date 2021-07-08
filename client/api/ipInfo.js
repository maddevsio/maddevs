export const getIPInfo = async axios => {
  try {
    const response = await axios.get('https://ipapi.co/json')
    return response
  } catch (error) {
    return {}
  }
}
