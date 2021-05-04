const isMobileMixin = {
  data() {
    return {
      isMobile: false,
    }
  },

  mounted() {
    this.checkNavigatior()
  },

  methods: {
    checkNavigatior() {
      this.isMobile = false
    },
  },
}

export default isMobileMixin
