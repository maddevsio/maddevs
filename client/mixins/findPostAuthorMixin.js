const findPostAuthorMixin = {
  methods: {
    findAuthor(authorId, authors) {
      if (!(authors && authors.length)) return null
      return authors.find(a => a.id === authorId)
    },
  },
}

export default findPostAuthorMixin
