<template>
  <modal name="get-case-studies" :clickToClose="false">
    <img src="@/assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide('get-case-studies')">
    <ValidationObserver v-slot="{ invalid }">
      <div class="form"> 
        <div class="fields-list">
          <ValidationProvider class="modal-field-item field-item" rules="required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Full Name</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="email|required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Work email</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="your@mail.com" v-model="email">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <FormCheckboxes
          @getPrivacyCheckboxState="getPrivacyCheckboxState"
          @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
          :inputId="inputId"
        />
        <button
          class="modal-button-default button-default red-text-and-border"
          :disabled="invalid || !agreeWithPrivacyPolicy"
          @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
        >Get Case Studies</button>
      </div>
    </ValidationObserver>
  </modal>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';

export default {
  name: 'case-studies-modal',
  components: {
    FormCheckboxes
  },
  data: () => ({
    fullName: null,
    email: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'case-studies'
  }),
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    },
    sendForm(isValid) {
      if (isValid === true) {
        const form = {
          templateId: 304622, // Required
          variables: {
            fullName: this.fullName,
            email: this.email,
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy,
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers
          }
        };
        this.$store.dispatch('sendContactMeForm', form);
      }
    }
  }
};
</script>
