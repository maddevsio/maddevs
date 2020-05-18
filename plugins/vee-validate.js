import { extend } from 'vee-validate';
import { required, email, integer, max } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('email', {
  ...email,
  message: 'Invalid email address. Please use your work email.'
});

extend('integer', {
  ...integer,
  message: 'Sorry, this field can only contain numbers and characters specific for phone numbers.'
});

extend('max', {
  ...max,
  message: 'Sorry, the number of characters in this field should not exceed 300'
});

