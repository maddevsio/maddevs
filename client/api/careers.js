export const getCareersHome = async prismic => {
  try {
    const response = await prismic.api.getSingle('careers_home')
    return response.data
  } catch (error) {
    return error
  }
}

export const getVacancyPosts = async prismic => {
  try {
    const response = await prismic.api.query(prismic.predicates.at('document.type', 'vacancy'), {
      orderings: '[my.vacancy.date desc]',
      pageSize: 100,
    })
    return response.results
  } catch (error) {
    return error
  }
}

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
