const changeSectionTextOpacityMixin = refName => ({
  data() {
    return {
      sectionTextOpacity: 1,
    }
  },

  methods: {
    onScroll() {
      const elementRef = this.$refs[refName]
      if (!elementRef) return
      const { clientHeight } = elementRef
      const scrollPosition = window.scrollY
      const result = ((clientHeight - scrollPosition) / clientHeight) + 0.2
      if (result > 0 && result <= 1) this.sectionTextOpacity = ((clientHeight - scrollPosition) / clientHeight) + 0.2
      if (scrollPosition === 0) this.sectionTextOpacity = 1
    },
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
})

export default changeSectionTextOpacityMixin
