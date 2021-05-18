import AOS from 'aos'
import 'aos/dist/aos.css'

const config = {}

function animateOnScrollMixin() {
  return {
    mounted() {
      AOS.init(config)
    },
  }
}

export default animateOnScrollMixin
