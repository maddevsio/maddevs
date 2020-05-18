import { extend } from 'vee-validate';
import { required, email, max } from 'vee-validate/dist/rules';
import PhoneNumber from 'awesome-phonenumber';

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
  message: 'Sorry, the number of characters in this field should not exceed 300'
});

const phone = {
  validate (value) {
    return new Promise(resolve => {
      let phone = new PhoneNumber(value);
      resolve({ valid: phone.isValid() });
    });
  }
};

extend('phone', {
  ...phone,
  message: 'Sorry, this field can only contain numbers and characters specific for phone numbers.'
});
