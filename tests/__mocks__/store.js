export const blog = {
  state: {
    customerContent: {},
    featuredCUPost: null,
  },
  getters: {
    customerContent(state) {
      return state.customerContent
    },
    featuredCUPost(state) {
      return state.featuredCUPost
    },
  },
}

export const blogPost = {
  state: {
    post: {
      type: 'post',
      id: 'YHRrABEAACkAwDuj',
      uid: 'software-project-handover',
      title: 'A software project handover',
      subtitle: 'How to switch to another team painlessly',
      featuredImage: {
        url: 'https://images.prismic.io/superpupertest/afa41339-f2f8-4f1d-8640-4b89d5d9d509_SPH.jpg?auto=compress,format&rect=0,1,2000,1084&w=983&h=533',
        alt: 'How to Handover a Software Project to Another Team.',
        copyright: '',
        dimensions: {
          width: 100,
          height: 200,
        },
      },
      postAuthor: {
        id: 'id',
        uid: 'uid',
        isBroken: false,
        lang: 'en-us',
        link_type: 'Document',
        tags: [],
        type: 'author',
      },
      tableOfContents: [],
      slices: [],
      metaTitle: 'How to Handover a Software Project to Another Team | Mad Devs Blog',
      metaDescription: 'What are the most common prerequisites for software project handover to a new development team? Learn when you should transfer your project to another team.',
      formattedDate: 'Apr 12, 2021',
      tags: [],
      recommendedPosts: [],
      jsonLd: '',
    },
  },
  getters: {
    blogPost(state) {
      return state.post
    },
  },
}

export default {
  modules: {
    blog,
    blogPost,
  },
}
