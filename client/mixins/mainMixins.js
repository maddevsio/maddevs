const mainMixins = {
  methods: {
    createAnchorID(text) {
      if (!text || typeof text !== 'string') return null
      const formattedText = text.trim()
        .toLowerCase()
        .replace(/[^+\w]/g, ' ') // Change all symbols to space
        .replace(/_/g, '') // Removed symbol "_"
        .trim() // Remove spaces from start & end string
        .replace(/\s+/g, '-') // Change spaces to "-"
      return formattedText
    },
  },
}

export default mainMixins
