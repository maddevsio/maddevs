const isIphoneMixin = {
  data() {
    return {
      isIphone: false,
    }
  },

  mounted() {
    this.checkNavigatior()
  },

  methods: {
    checkNavigatior() {
      this.isIphone = Boolean(navigator.userAgent.match(/(iPhone)/i))
    },
  },
}

export default isIphoneMixin
