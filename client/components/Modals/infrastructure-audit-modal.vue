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
          <ValidationProvider class="modal-field-item field-item" rules="phone|max:50" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name">Phone number</p>
            <input type="text" class="modal-entry-field entry-field" :class="classes" placeholder="+1 (23X) XXX-XXXX" v-model="phoneNumber">
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider class="modal-field-item field-item" rules="max:300|required" v-slot="{ classes, errors }">
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
    ]
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
      if (isValid === true) {
        const form = {
          templateId: 304628, // Required
          variables: {
            fullName: this.fullName,
            company: this.company,
            email: this.email,
            phoneNumber: this.phoneNumber,
            selectedProjectHost: this.selectedProjectHost,
            agreeWithPrivacyPolicy: this.agreeWithPrivacyPolicy ? 'Yes' : 'No',
            agreeToGetMadDevsDiscountOffers: this.agreeToGetMadDevsDiscountOffers ? 'Yes' : 'No'
          }
        };
        this.$nuxt.$emit(this.modalName, form);
      }
    }
  }
};
</script>
