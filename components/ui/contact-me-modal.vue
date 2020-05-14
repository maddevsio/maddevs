<template>
  <modal name="contact-me" :clickToClose="false">
    <img src="../../assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide('contact-me')">
    <form class="footer-form form"> 
      <div class="fields-list">
        <ValidationProvider class="field-item" rules="required" v-slot="{ errors }">
          <p class="field-name required">Full Name</p>
          <input type="text" class="entry-field" placeholder="John Smith" v-model="fullName">
          <span class="error-text">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider class="field-item" rules="email|required" v-slot="{ errors }">
          <p class="field-name required">Work email</p>
          <input type="text" class="entry-field" placeholder="your@mail.com" v-model="email">
          <span class="error-text">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider class="field-item" rules="integer" v-slot="{ errors }">
          <p class="field-name">Phone number</p>
          <input type="text" class="entry-field" placeholder="Enter phone number" v-model="phoneNumber">
          <span class="error-text">{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="form-checkboxes">
        <label class="form-checkbox-label required" for="privacy-policy">I confirm that I have read and accepted Mad Devs’ <br> Privacy Policy
          <input class="form-checkbox-input" id="privacy-policy" type="checkbox" name="Privacy policy">
          <span class="checkmark"></span>
        </label>
        <label class="form-checkbox-label" for="marketing-communications">I agree to get Mad Devs’ discount offers and other <br> marketing communications
          <input class="form-checkbox-input" id="marketing-communications" type="checkbox" name="Marketing communications">
          <span class="checkmark"></span>
        </label>
      </div>
      <button class="button-default red-text-and-border">Сontact Me</button>
    </form>
  </modal>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'ContactMe',
  components: {
    ValidationProvider
  },
  data: () => ({
    fullName: '',
    email: '',
    phoneNumber: ''
  })
};
</script>
