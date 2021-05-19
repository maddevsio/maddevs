const scrollToElementMixin = {
  methods: {
    scrollToElement(selector) {
      const targetEl = document.querySelector(selector)
      if (targetEl) {
        if ('scrollBehavior' in document.documentElement.style) return window.scrollTo({ top: targetEl.offsetTop, behavior: 'smooth' })
        return window.scrollTo(0, targetEl.offsetTop)
      }
      return null
    },
  },
}

export default scrollToElementMixin
