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
    MixinPlayVideo(videoHtmlElement) {
      // NOTE: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
      const playPromise = videoHtmlElement.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Automatic playback started!
          // Show playing UI.
        }).catch(() => {
          // Auto-play was prevented
          // Show paused UI.
        })
      }
    },
  },
}

export default mainMixins
