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
      <formCheckboxes 
        v-on:getPrivacyCheckboxState="getPrivacyCheckboxState($event)"
        v-on:getDiscountOffersCheckboxState="getDiscountOffersCheckboxState($event)"
      />
      <button :class="`button-default red-text-and-border ${agreeWithPrivacyPolicy ? '' : 'disabled'}`">Сontact Me</button>
    </form>
  </modal>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import formCheckboxes from '@/components/ui/form-checkboxes';

export default {
  name: 'ContactMe',
  components: {
    ValidationProvider,
    formCheckboxes
  },
  data: () => ({
    fullName: '',
    email: '',
    phoneNumber: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false
  }),
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },

    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    }
  }
};
</script>
