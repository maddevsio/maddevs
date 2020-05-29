import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend, configure } from 'vee-validate';
import { required, email, max } from 'vee-validate/dist/rules';
import PhoneNumber from 'awesome-phonenumber';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

const phoneNumber = {
  validate (value) {
    return new Promise(resolve => {
      let phone = new PhoneNumber(value);
      resolve({ valid: phone.isValid() });
    });
  }
};

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('oneOf', {
  params: ['linkedin'],
  validate(value, { linkedin }) {
    console.log(linkedin, value);
    return (
      !!((linkedin && !value) ||
      (!linkedin && value) ||
      (!linkedin && !value))
    );
  },
  message: 'One of the two fields is required'
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
