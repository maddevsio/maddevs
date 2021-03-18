export const phoneHandler = {
  data: () => ({
    phoneNumber: null
  }),
  methods: {
    phoneChangeHandler(event) {
      const newEvent = event;
      const x = newEvent.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,3})(\d{0,4})(\d{0,15})/);
      newEvent.target.value = !x[2] ? x[1] : '+' + x[1] + ' ' + x[2] + (x[3] ? '-' + x[3] : ' ') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');

      this.phoneNumber = newEvent.target.value;
      this.$v && this.$v.phoneNumber.$touch(newEvent);

      return event;
    }
  }
};



