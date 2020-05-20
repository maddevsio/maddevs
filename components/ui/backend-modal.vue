<template>
  <ValidationObserver v-slot="{ invalid }">
    <modal name="backend" :clickToClose="false">
      <img src="../../assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide('backend')">
      <form class="form"> 
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
        <formCheckboxes
          v-on:getPrivacyCheckboxState="getPrivacyCheckboxState($event)"
          v-on:getDiscountOffersCheckboxState="getDiscountOffersCheckboxState($event)"
          :firstCheckboxId="firstCheckboxId"
          :secondCheckboxId="secondCheckboxId"
        />
        <button class="modal-button-default button-default red-text-and-border" :disabled="invalid">Get server help</button>
      </form>
    </modal>
  </ValidationObserver>
</template>

<script>
import formCheckboxes from '@/components/ui/form-checkboxes';

export default {
  name: 'backend-modal',
  components: {
    formCheckboxes
  },
  data: () => ({
    fullName: '',
    email: '',
    phoneNumber: '',
    interesteBackendExpertise: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    firstCheckboxId: 'privacy-policy-contact-backend',
    secondCheckboxId: 'marketing-communications-backend'
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
