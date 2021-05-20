const mainMixins = {
  methods: {
    createAnchorID(text) {
      if (!text || typeof text !== 'string') return null
      const formattedText = text.trim().toLowerCase().replace(/&amp;|[|&;$%@"<>()+,?!'’]/g, '').replace(/\s+/g, '-')
      return formattedText
    },
  },
}

export default mainMixins
