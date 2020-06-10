<template>
  <ModalContainer :name="modalName">
    <ValidationObserver v-slot="{ invalid }">
      <div class="form"> 
        <div class="fields-list">
          <ValidationProvider class="modal-field-item field-item" rules="required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Full Name</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="max:300" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name">Company</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="MyAwesomeCompany, Inc." v-model="company">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="email|required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Work email</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="your@mail.com" v-model="email">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="phone" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name">Phone number</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="+1 (23X) XXX-XXXX" v-model="phoneNumber">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <FormCheckboxes
          v-on:getPrivacyCheckboxState="getPrivacyCheckboxState($event)"
          v-on:getDiscountOffersCheckboxState="getDiscountOffersCheckboxState($event)"
          :inputId="inputId"
        />
        <button
          class="modal-button-default button-default red-text-and-border"
          :disabled="invalid || !agreeWithPrivacyPolicy"
          @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
          v-WaveAnimation
        >Сontact Me</button>
      </div>
    </ValidationObserver>
  </ModalContainer>
</template>

<script>
import WaveAnimation from '@/directives/WaveAnimation';
import FormCheckboxes from '@/components/ui/form-checkboxes';
import ModalContainer from '@/containers/ModalContainer';

export default {
  name: 'ContactMe',
  components: {
    FormCheckboxes,
    ModalContainer
  },
  directives: {
    WaveAnimation
  },
  data: () => ({
    modalName: 'contact-me-modal',
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'contact-me'
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
          templateId: 303792, // Required
          variables: {
            fullName: this.fullName,
            company: this.company,
            email: this.email,
            phoneNumber: this.phoneNumber,
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy,
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers
          }
        };
        this.$nuxt.$emit(this.modalName, form);
      }
    }
  }
};
</script>
