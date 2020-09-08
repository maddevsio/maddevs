<template>
  <ModalContainer :name="modalName">
    <ValidationObserver v-slot="{ invalid }">
      <div class="form"> 
        <div class="fields-list">
          <ValidationProvider class="modal-field-item field-item" rules="required|max:50" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Full Name</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="John Smith" v-model="fullName">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="email|required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Work email</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="your@mail.com" v-model="email">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="phone|max:50" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name">Phone number</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="+1 23X XXX-XXXX" v-model="phoneNumber">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="max:300" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Company</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="MyAwesomeCompany, Inc." v-model="company">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <RadioList 
            @getSelectedProjectHost="getSelectedProjectHost"
            :inputId="inputId"
            :fieldName="fieldName"
            :emitMethodName="emitMethodName"
            :options="options"
            :sectionIsRequired="sectionIsRequired"
          />
        </div>
        <FormCheckboxes
          ref="checkboxes"
          @getPrivacyCheckboxState="getPrivacyCheckboxState"
          @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
          :inputId="inputId"
        />
        <UIButton
          name="Get an infrastructure audit"
          :disabled="invalid || !agreeWithPrivacyPolicy"
          @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
        />
      </div>
    </ValidationObserver>
  </ModalContainer>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';
import RadioList from '@/components/ui/radio-list';
import ModalContainer from '@/containers/ModalContainer';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'infrastructure-audit',
  components: {
    FormCheckboxes,
    RadioList,
    ModalContainer,
    UIButton
  },
  data: () => ({
    modalName: 'infrastructure-modal',
    fullName: null,
    email: null,
    emailTo: 'team@maddevs.io',
    phoneNumber: null,
    interesteMobileExpertise: null,
    selectedProjectHost: null,
    company: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    sectionIsRequired: false,
    inputId: 'infrastructure-audit',
    fieldName: 'Where is your project hosted?',
    emitMethodName: 'getSelectedProjectHost',
    options: [
      {
        id: 'on-premises',
        text: 'On-premises'
      },
      {
        id: 'amazon',
        text: 'Amazon Web Services'
      },
      {
        id: 'google-cloud',
        text: 'Google Cloud Platform'
      },
      {
        id: 'microsoft-azure',
        text: 'Microsoft Azure'
      },
      {
        id: 'heroku',
        text: 'Heroku'
      },
      {
        id: 'digital-ocean',
        text: 'Digital Ocean'
      },
      {
        id: 'other',
        text: 'Other'
      }
    ],
    onSubmit: false,
    subject: 'Marketing',
    form: ''
  }),
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    },
    getSelectedProjectHost(projectHost) {
      this.selectedProjectHost = projectHost;
    },
    sendForm(isValid) {
      if (isValid === true && !this.onSubmit) {
        this.onSubmit = true;
        this.form = {
          templateId: 304628, // Required
          variables: {
            fullName: this.fullName || '',
            company: this.company || '',
            email: this.email || '',
            emailTo: this.emailTo || '',
            phoneNumber: this.phoneNumber || '',
            selectedProjectHost: this.selectedProjectHost || '',
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No',
            subject: this.subject || ''
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
      this.interesteMobileExpertise = null;
      this.selectedProjectHost = null;
      this.company = null;
      this.agreeWithPrivacyPolicy = false;
      this.agreeToGetMadDevsDiscountOffers = false;
    }
  }
};
</script>
