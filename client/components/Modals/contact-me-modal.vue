<template>
  <div>
    <div class="form"> 
      <div class="fields-list">
        <div class="modal-field-item field-item">
          <p class="modal-field-name field-name required">Full Name</p>
          <input @input="$v.name.$touch" type="text" class="modal-entry-field entry-field" placeholder="John Smith" v-model="fullName">
          <div v-if="$v.name.$dirty">
            <span class="modal-error-text error-text" v-if="!$v.name.required">This field is required.</span>
            <span class="modal-error-text error-text" v-if="!$v.name.maxLength">
              Sorry, the number of characters in this field should not exceed 50.
            </span>
          </div>
        </div>
        <div class="modal-field-item field-item">
          <p class="modal-field-name field-name">Company</p>
          <input @input="$v.company.$touch" type="text" class="modal-entry-field entry-field" placeholder="MyAwesomeCompany, Inc." v-model="company">
          <div v-if="$v.company.$dirty">
            <span class="modal-error-text error-text" v-if="!$v.company.maxLength">
              Sorry, the number of characters in this field should not exceed 300.
            </span>
          </div>
        </div>
        <div class="modal-field-item field-item">
          <p class="modal-field-name field-name required">Work email</p>
          <input @input="$v.email.$touch" type="text" class="modal-entry-field entry-field" placeholder="your@mail.com" v-model="email">
          <div v-if="$v.email.$dirty">
            <span class="modal-error-text error-text" v-if="!$v.email.required">This field is required.</span>
            <span class="modal-error-text error-text" v-if="!$v.email.email">
              Invalid email address. Please use your work email.
            </span>
          </div>
        </div>
        <div class="modal-field-item field-item">
          <p class="modal-field-name field-name">Phone number</p>
          <input type="text" class="modal-entry-field entry-field" placeholder="+1 23X XXX-XXXX" v-model="phoneNumber">
          <div class="modal-error-text error-text">Error text</div>
        </div>
      </div>
      <FormCheckboxes
        ref="checkboxes"
        v-on:getPrivacyCheckboxState="getPrivacyCheckboxState"
        v-on:getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
        :inputId="inputId"
      />
      <UIButton
        class="modal-button"
        :disabled="!agreeWithPrivacyPolicy || onSubmit"
        @click="sendForm(agreeWithPrivacyPolicy)"
        :loading="onSubmit"
      >
        Сontact Me
      </UIButton>
    </div>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
import FormCheckboxes from '@/components/ui/form-checkboxes';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'ContactMe',
  components: {
    FormCheckboxes,
    UIButton
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(50)
    },
    company: {
      maxLength: maxLength(300)
    },
    email: {
      required,
      email
    }
  },
  data: () => ({
    modalName: 'contact-me-modal',
    fullName: null,
    email: null,
    emailTo: 'team@maddevs.io',
    phoneNumber: null,
    company: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'contact-me',
    onSubmit: false,
    subject: 'Marketing',
    form: null,
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
    createLead() {
      const data = [{
        name: this.fullName,
        custom_fields_values: [
          { field_id: 261281, values: [{ value: this.email }] }, // Email
          { field_id: 261331, values: [{ value: this.company }] }, // Company
          { field_id: 261333, values: [{ value: this.phoneNumber }] } // Phone
        ]
      }];
      this.$store.dispatch('createNewLead', data);
    },
    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true;
        this.form = {
          templateId: 303792, // Required
          variables: {
            fullName: this.fullName || '',
            company: this.company || '',
            email: this.email || '',
            emailTo: this.emailTo || '',
            phoneNumber: this.phoneNumber || '',
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
            subject: this.subject || '',
            modalTitle: this.modalTitle
          }
        };
        this.$store.dispatch('sendEmail', this.form).then(res => {
          this.onSubmit = false;
          // this.createLead();
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
      this.company = null;
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>
