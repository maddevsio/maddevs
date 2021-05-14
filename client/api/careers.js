export const getVacancyPost = async (prismic, payload) => {
  try {
    const post = await prismic.api.getByUID('vacancy', payload)
    return post
  } catch (error) {
    return error
  }
}

export const sendVacancy = async (axios, payload) => {
  try {
    const response = await axios.post('api/careers', payload)
    return response
  } catch (error) {
    return error
  }
}
