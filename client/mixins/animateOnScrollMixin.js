import AOS from 'aos'

function animateOnScrollMixin(config = {}) {
  return {
    mounted() {
      if (this.featureFlag('careersPageAnimations')) {
        import('aos/dist/aos.css')
        AOS.init(config)
      }
    },
  }
}

export default animateOnScrollMixin
