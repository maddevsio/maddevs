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
          <ValidationProvider class="modal-field-item field-item" rules="max:500" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name">Backend expertise you are interested in</p>
            <textarea type="text" class="modal-entry-field entry-field textarea" :class="classes" placeholder="I need Go and C/C++ developers" v-model="interesteBackendExpertise"/>
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <FormCheckboxes
          v-on:getPrivacyCheckboxState="getPrivacyCheckboxState($event)"
          v-on:getDiscountOffersCheckboxState="getDiscountOffersCheckboxState($event)"
          :inputId="inputId"
        />
        <UIButton
          name="Get server help"
          :disabled="invalid"
          @click="sendForm(!invalid)"
        />
      </div>
    </ValidationObserver>
  </ModalContainer>
</template>

<script>
import ModalContainer from '@/containers/ModalContainer';
import FormCheckboxes from '@/components/ui/form-checkboxes';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'backend-modal',
  components: {
    ModalContainer,
    FormCheckboxes,
    UIButton
  },
  data: () => ({
    modalName: 'backend-modal',
    fullName: '',
    email: '',
    phoneNumber: '',
    interesteBackendExpertise: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'backend'
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
          templateId: 304617, // Required
          variables: {
            fullName: this.fullName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            interesteBackendExpertise: this.interesteBackendExpertise,
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
