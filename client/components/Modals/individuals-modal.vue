<template>
  <ValidationObserver v-slot="{ invalid }">
    <div class="form"> 
      <div class="fields-list">
        <ValidationProvider class="modal-field-item field-item" rules="required|max:50" v-slot="{ classes, errors }">
          <p class="modal-field-name field-name required">Full Name</p>
          <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
          <div class="modal-error-text error-text">{{ errors[0] }}</div>
        </ValidationProvider>
        <ValidationProvider class="modal-field-item field-item" rules="email|required" v-slot="{ classes, errors }">
          <p class="modal-field-name field-name required">Work email</p>
          <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="your@mail.com" v-model="email">
          <div class="modal-error-text error-text">{{ errors[0] }}</div>
        </ValidationProvider>
        <ValidationProvider class="modal-field-item field-item" rules="phone|max:50" v-slot="{ classes, errors }">
          <p class="modal-field-name field-name">Phone number</p>
          <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="+1 23X XXX-XXXX" v-model="phoneNumber">
          <div class="modal-error-text error-text">{{ errors[0] }}</div>
        </ValidationProvider>
        <div class="modal-field-item field-item">
          <p class="modal-field-name field-name">Expertise you are interested in</p>
          <input type="text" class="modal-entry-field entry-field" placeholder="React development, Heroku Postgres, etc" v-model="interestedExpertise">
        </div>
        <ValidationProvider class="modal-field-item field-item" rules="max:500" v-slot="{ classes, errors }">
          <p class="modal-field-name field-name">Project description</p>
          <textarea type="text" class="modal-entry-field entry-field textarea" :class="classes" placeholder="Describe your project..." v-model="projectDescription"/>
          <div class="modal-error-text error-text">{{ errors[0] }}</div>
        </ValidationProvider>
      </div>
      <FormCheckboxes
        ref="checkboxes"
        @getPrivacyCheckboxState="getPrivacyCheckboxState"
        @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
        :inputId="inputId"
      />
      <UIButton
        :disabled="invalid || !agreeWithPrivacyPolicy || onSubmit"
        @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
        class="modal-button"
        :loading="onSubmit"
      >
        Get individual proactive rockets
      </UIButton>
    </div>
  </ValidationObserver>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'frontend-modal',
  components: {
    FormCheckboxes,
    UIButton
  },
  data: () => ({
    modalName: 'individuals-modal',
    fullName: null,
    email: null,
    emailTo: 'team@maddevs.io',
    phoneNumber: null,
    projectDescription: null,
    interestedExpertise: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'individuals',
    onSubmit: false,
    subject: 'Marketing',
    form: '',
    modalTitle: 'Mad Devs Website Forms'
  }),
  mounted() {
    this.$nuxt.$on('resetCheckboxesInForm', () => { // Reset checkboxes in form if user close modal 
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    });
  },
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    },
    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true;
        this.form = {
          templateId: 304625, // Required
          variables: {
            fullName: this.fullName || '',
            email: this.email || '',
            emailTo: this.emailTo || '',
            phoneNumber: this.phoneNumber || '',
            interestedExpertise: this.interestedExpertise || '',
            projectDescription: this.projectDescription || '',
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
            subject: this.subject || '',
            modalTitle: this.modalTitle
          }
        };
        this.$store.dispatch('sendEmail', this.form).then(res => {
          this.onSubmit = false;
          this.resetForm();
          if (res.status === 200) {
            this.$nuxt.$emit(this.modalName, true);
          } else {
            this.$nuxt.$emit(this.modalName, false);
          }
        });
      }
    },
    resetForm() {
      this.$refs.checkboxes.reset();
      this.fullName = null;
      this.email = null;
      this.phoneNumber = null;
      this.projectDescription = null;
      this.interestedExpertise = null;
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>
