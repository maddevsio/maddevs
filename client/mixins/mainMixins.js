const mainMixins = {
  methods: {
    createAnchorID(text) {
      if (!text || typeof text !== 'string') return null
      const formattedText = text.trim()
        .toLowerCase()
        .replace(/\s+/g, '-') // Change spaces to -
        .replace(/[^+\w-]/g, '') // Remove all symbols
      return formattedText
    },
  },
}

export default mainMixins
