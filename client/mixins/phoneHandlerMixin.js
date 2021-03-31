const phoneHandlerMixin = {
  data: () => ({
    phoneNumber: null,
  }),
  methods: {
    phoneChangeHandler(event) {
      if (event && event.target && event.target.value) {
        const modernizedEvent = event
        const x = modernizedEvent.target.value
          .replace(/\D/g, '')
          .match(/(\d{0,1})(\d{0,4})(\d{0,3})(\d{0,4})(\d{0,15})/)
        modernizedEvent.target.value = !x[2]
          ? x[1]
          : `+${x[1]} ${x[2]}${x[3] ? `-${x[3]}` : ''}${x[4] ? `-${x[4]}` : ''}${x[5] ? `-${x[5]}` : ''}`

        this.phoneNumber = modernizedEvent.target.value
        if (this.$v) this.$v.phoneNumber.$touch(modernizedEvent)
      }
    },
  },
}

export default phoneHandlerMixin
