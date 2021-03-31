import initializeLazyLoad from '@/helpers/lazyLoad'

const initLazyLoadMixin = {
  mounted() {
    initializeLazyLoad()
  },
}

export default initLazyLoadMixin
