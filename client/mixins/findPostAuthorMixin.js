const findPostAuthorMixin = {
  methods: {
    findAuthor(authorId, allAuthors) {
      if (!(allAuthors && allAuthors.length)) return null
      return allAuthors.find(a => a.id === authorId)
    },
  },
}

export default findPostAuthorMixin
