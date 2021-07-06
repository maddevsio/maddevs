const scrollOnBody = {
  methods: {
    disableScrollOnBody() {
      const scrollbarWidth = window.innerWidth - document.body.offsetWidth
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.overflow = 'hidden'
      document.body.style.marginRight = `${scrollbarWidth}px`
    },
    enableScrollOnBody() {
      document.body.style.top = 'auto'
      document.body.style.overflow = 'auto'
      document.body.style.marginRight = 'auto'
    },
  },
}

export default scrollOnBody
