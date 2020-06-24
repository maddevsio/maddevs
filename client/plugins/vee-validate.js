import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend, configure } from 'vee-validate';
import { required, email, max } from 'vee-validate/dist/rules';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

const phoneNumber = {
  validate (value) {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/g;
    if (value.match(regex)) {
      return true;
    }
    return false;
  }
};

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('email', {
  ...email,
  message: 'Invalid email address. Please use your work email.'
});

extend('max', {
  ...max,
  params: ['length'],
  message: 'Sorry, the number of characters in this field should not exceed {length}'
});

extend('phone', {
  ...phoneNumber,
  message: 'Sorry, this field can only contain numbers and characters specific for phone numbers.'
});

configure({
  classes: {
    invalid: 'invalid'
  }
});
