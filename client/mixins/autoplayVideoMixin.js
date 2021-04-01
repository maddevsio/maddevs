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
                  entry.target.play()
                }
              }
            })
          }
          const observer = new IntersectionObserver(callback, observerOptions)
          observer.observe(document.getElementById(video))
        })
      },
    },
  }
}

export default autoplayVideoMixin
