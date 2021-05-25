const observerDefaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
}

function autoplayVideoMixin(videoIds, observerOptions = observerDefaultOptions) {
  return {
    mounted() {
      this.setupAutoplay()
    },

    methods: {
      setupAutoplay() {
        videoIds.forEach(video => {
          const callback = entries => {
            entries.forEach(entry => {
              if (entry.target.id === video) {
                if (entry.isIntersecting) {
                  try {
                    entry.target.play()
                  } catch (err) {
                    // prevent play
                  }
                }
              }
            })
          }
          const element = document.getElementById(video)
          if (!element) return
          const observer = new IntersectionObserver(callback, observerOptions)
          observer.observe(element)
        })
      },
    },
  }
}

export default autoplayVideoMixin
