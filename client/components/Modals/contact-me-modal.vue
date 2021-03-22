<template>
  <div class="form">
    <div class="fields-list">
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Full Name</p>
        <input @input="$v.fullname.$touch" type="text" :class="{ 'invalid': $v.fullname.$error }" class="modal-entry-field entry-field" placeholder="John Smith" v-model="fullname">
        <!-- Erros -->
        <div v-if="$v.fullname.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.fullname.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.fullname.maxLength">
            Sorry, the number of characters in this field should not exceed 50.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">Company</p>
        <input @input="$v.company.$touch" type="text" :class="{ 'invalid': $v.company.$error }" class="modal-entry-field entry-field" placeholder="MyAwesomeCompany, Inc." v-model="company">
        <!-- Erros -->
        <div v-if="$v.company.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.company.maxLength">
            Sorry, the number of characters in this field should not exceed 300.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name required">Work email</p>
        <input @input="$v.email.$touch" type="text" :class="{ 'invalid': $v.email.$error }" class="modal-entry-field entry-field" placeholder="your@mail.com" v-model="email">
        <!-- Erros -->
        <div v-if="$v.email.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.email.required">This field is required.</span>
          <span class="modal-error-text error-text" v-if="!$v.email.email">
            Invalid email address. Please use your work email.
          </span>
        </div>
        <!-- End Erros -->
      </div>
      <div class="modal-field-item field-item">
        <p class="modal-field-name field-name">Phone number</p>
        <input @input="$v.phone.$touch" type="text" :class="{ 'invalid': $v.phone.$error }" class="modal-entry-field entry-field" placeholder="+1 23X XXX-XXXX" v-model="phone">
        <!-- Erros -->
        <div v-if="$v.phone.$dirty">
          <span class="modal-error-text error-text" v-if="!$v.phone.phone">
            Sorry, this field can only contain numbers and characters specific for phone numbers.
          </span>
        </div>
        <!-- End Erros -->
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
      @click="submitForm(!$v.validationGroup.$invalid || agreeWithPrivacyPolicy)"
      :disabled="$v.validationGroup.$invalid || !agreeWithPrivacyPolicy || onSubmit"
      :loading="onSubmit"
    >
      Сontact Me
    </UIButton>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
import { phone } from '@/helpers/validators';
import FormCheckboxes from '@/components/ui/form-checkboxes';
import UIButton from '@/components/ui/UIButton';
import { phoneHandler } from '@/mixins/phoneHandler';

export default {
  name: 'ContactMe',
  mixins: [phoneHandler],
  components: {
    FormCheckboxes,
    UIButton
  },
  validations: {
    fullname: {
      required,
      maxLength: maxLength(50)
    },
    company: {
      maxLength: maxLength(300)
    },
    email: {
      required,
      email
    },
    phone: {
      phone
    },
    validationGroup: ['fullname', 'company', 'email', 'phone']
  },
  data: () => ({
    modalName: 'contact-me-modal',
    fullname: null,
    email: null,
    emailTo: process.env.emailContact,
    phone: null,
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

    async submitForm(isValid) {
      if(!isValid || this.onSubmit) return;

      const data = {
        // templateId: 305480, // It's template id for email
        // emailTo: this.emailTo || '',
        // agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
        // agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
        // subject: this.subject || '',
        // modalTitle: this.modalTitle
        fullname: this.fullname,
        email: this.email || '',
        company: this.company,
        phone: this.phone || '',
        type: 'contact-me'
      };

      await this.$store.dispatch('createNewLead', data);
      
      this.onSubmit = false;
      this.resetForm();
      this.$parent.$emit('success');
    },

    // createLead() {
    //   const data = [{
    //     name: this.fullname,
    //     custom_fields_values: [
    //       {field_id: 261281, values: [{value: this.email}]}, // Email
    //       {field_id: 261331, values: [{value: this.company}]}, // Company
    //       {field_id: 261333, values: [{value: this.phone}]} // Phone
    //     ]
    //   }];
    //   this.$store.dispatch('createNewLead', data);
    // },
    
    resetForm() {
      this.$refs.checkboxes.reset();
      this.fullname = null;
      this.email = null;
      this.phone = null;
      this.company = null;
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>
