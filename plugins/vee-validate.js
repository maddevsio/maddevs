import { extend } from 'vee-validate';
import { required, email, integer } from 'vee-validate/dist/rules';

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
  message: 'The number field must be a valid number'
});
