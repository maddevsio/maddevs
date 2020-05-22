<template>
  <modal name="teams" :clickToClose="false">
    <img src="../../assets/img/common/close-icon.svg" class="close-modal" alt="Close modal" @click="$modal.hide('teams')">
    <ValidationObserver v-slot="{ invalid }">
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
          <ExpectedTeamSize />
          <ValidationProvider class="modal-field-item field-item" rules="max:500" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name">Project description</p>
            <textarea type="text" class="modal-entry-field entry-field textarea" :class="classes" placeholder="Describe your project..." v-model="projectDescription"/>
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <FormCheckboxes
          v-on:getPrivacyCheckboxState="getPrivacyCheckboxState($event)"
          v-on:getDiscountOffersCheckboxState="getDiscountOffersCheckboxState($event)"
          :firstCheckboxId="firstCheckboxId"
          :secondCheckboxId="secondCheckboxId"
        />
        <button class="modal-button-default button-default red-text-and-border" :disabled="invalid || !agreeWithPrivacyPolicy">Get a team of ultra fast coders</button>
      </form>
    </ValidationObserver>
  </modal>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';
import ExpectedTeamSize from '@/components/ui/expected-team-size';

export default {
  name: 'frontend-modal',
  components: {
    FormCheckboxes,
    ExpectedTeamSize
  },
  data: () => ({
    fullName: '',
    email: '',
    phoneNumber: '',
    projectDescription: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    firstCheckboxId: 'privacy-policy-teams',
    secondCheckboxId: 'marketing-communications-teams'
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
