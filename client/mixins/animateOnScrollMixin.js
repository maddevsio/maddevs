import AOS from 'aos'

function animateOnScrollMixin(config = {}, useAnimations = true) {
  return {
    mounted() {
      if (useAnimations) {
        import('aos/dist/aos.css')
        AOS.init(config)
      }
    },
  }
}

export default animateOnScrollMixin
