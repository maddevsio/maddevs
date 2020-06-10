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
            <p class="modal-field-name field-name">Frontend expertise you are interested in</p>
            <textarea type="text" class="modal-entry-field entry-field textarea" :class="classes" placeholder="I need assistance with JS development and UI/UX design" v-model="interesteFrontendExpertise" @keydown="autosize($event)" rows="1"/>
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <FormCheckboxes
          v-on:getPrivacyCheckboxState="getPrivacyCheckboxState($event)"
          v-on:getDiscountOffersCheckboxState="getDiscountOffersCheckboxState($event)"
          :inputId="inputId"
        />
        <UIButton
          name="Get UX help"
          :disabled="invalid || !agreeWithPrivacyPolicy"
          @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
        />
      </div>
    </ValidationObserver>
  </ModalContainer>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';
import ModalContainer from '@/containers/ModalContainer';
import UIButton from '@/components/ui/UIButton';

export default {
  name: 'frontend-modal',
  components: {
    FormCheckboxes,
    ModalContainer,
    UIButton
  },
  data: () => ({
    modalName: 'frontend-modal',
    fullName: '',
    email: '',
    phoneNumber: '',
    interesteFrontendExpertise: '',
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'frontend'
  }),
  methods: {
    getPrivacyCheckboxState(privacyState) {
      this.agreeWithPrivacyPolicy = privacyState;
    },
    getDiscountOffersCheckboxState(discountOffersState) {
      this.agreeToGetMadDevsDiscountOffers = discountOffersState;
    },
    autosize(e) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    sendForm(isValid) {
      if (isValid === true) {
        const form = {
          templateId: 304620, // Required
          variables: {
            fullName: this.fullName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            interesteFrontendExpertise: this.interesteFrontendExpertise,
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

<style lang="scss" scoped>
  .form {
    textarea {
      height: 79px;
      min-height: 79px;
    }
  }

  @media only screen and (max-height: 700px) {
    .form {
      textarea {
        height: 57px;
        min-height: 57px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
		.form {
      textarea {
        height: 62px;
        min-height: 62px;
      }
    }
  }

  @media only screen and (max-width: 475px) {
		.form {
      textarea {
        height: 79px;
        min-height: 79px;
      }
    }
  }
</style>
