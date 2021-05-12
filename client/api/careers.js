export const getVacancyPost = async (prismic, payload) => {
  try {
    const post = await prismic.api.getByUID(payload.type, payload.uid)
    return post
  } catch (error) {
    return error
  }
}
