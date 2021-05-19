import initializeLazyLoad from '@/helpers/lazyLoad'

const initLazyLoadMixin = {
  mounted() {
    initializeLazyLoad()
  },

  methods: {
    resetLazyLoad() {
      initializeLazyLoad()
    },
  },
}

export default initLazyLoadMixin
