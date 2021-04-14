import { phone } from '@/helpers/validators'

const modernizePhoneNumber = number => {
  const matched = number.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,3})(\d{0,4})(\d{0,15})/)
  return !matched[2]
    ? matched[1]
    : `+${matched[1]} ${matched[2]}${matched[3] ? `-${matched[3]}` : ''}${matched[4] ? `-${matched[4]}` : ''}${matched[5] ? `-${matched[5]}` : ''}`
}

const phoneHandlerMixin = {
  data: () => ({
    phoneNumber: '',
  }),
  methods: {
    phoneChangeHandler(value, event) {
      if (value === '') this.phoneNumber = ''
      const isPhone = phone(value)
      if (!isPhone) event.preventDefault()
      if (event && event.target && event.target.value) {
        const modernizedEvent = event
        modernizedEvent.target.value = modernizePhoneNumber(event.target.value)
        this.phoneNumber = modernizedEvent.target.value
        if (this.$v) this.$v.phoneNumber.$touch(modernizedEvent)
      }
    },
  },
}

export default phoneHandlerMixin
