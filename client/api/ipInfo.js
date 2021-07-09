import axios from 'axios'

export const getIPInfo = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json')
    return response.data
  } catch (error) {
    return {}
  }
}
