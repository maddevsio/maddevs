export const getVacancyPost = async (prismic, payload) => {
  try {
    const post = await prismic.api.getByUID('vacancy', payload)
    return post
  } catch (error) {
    return error
  }
}
