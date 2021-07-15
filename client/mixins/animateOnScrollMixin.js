import AOS from 'aos'

function animateOnScrollMixin(config = {}) {
  return {
    mounted() {
      import('aos/dist/aos.css')
      AOS.init(config)
    },
  }
}

export default animateOnScrollMixin
