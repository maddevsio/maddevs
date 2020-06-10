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
          <ValidationProvider class="modal-field-item field-item" rules="max:500|required" v-slot="{ classes, errors }">
            <p class="modal-field-name field-name required">Your question on team productivity​</p>
            <textarea type="text" class="modal-entry-field entry-field textarea" :class="classes" placeholder="How can I cope with miscommunication on the team and document things on time?" v-model="teamProductivityQuestion"/>
            <span class="modal-error-text error-text">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <FormCheckboxes
          @getPrivacyCheckboxState="getPrivacyCheckboxState"
          @getDiscountOffersCheckboxState="getDiscountOffersCheckboxState"
          :inputId="inputId"
        />
        <button
          class="modal-button-default button-default red-text-and-border"
          :disabled="invalid || !agreeWithPrivacyPolicy"
          @click="sendForm(!invalid || agreeWithPrivacyPolicy)"
        >​Get advice on team</button>
      </div>
    </ValidationObserver>
  </ModalContainer>
</template>

<script>
import FormCheckboxes from '@/components/ui/form-checkboxes';
import ModalContainer from '@/containers/ModalContainer';

export default {
  name: 'team-headcount',
  components: {
    FormCheckboxes,
    ModalContainer
  },
  data: () => ({
    modalName: 'team-headcount-modal',
    fullName: null,
    email: null,
    phoneNumber: null,
    teamProductivityQuestion: null,
    agreeWithPrivacyPolicy: false,
    agreeToGetMadDevsDiscountOffers: false,
    inputId: 'team-headcount'
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
          templateId: 304635, // Required
          variables: {
            fullName: this.fullName,
            teamProductivityQuestion: this.teamProductivityQuestion,
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

<style lang="scss" scoped>
  .form {
    textarea {
      height: 79px;
      min-height: 79px;
    }
  }

  @media only screen and (max-width: 565px) {
		.form {
      textarea {
        height: 79px;
        min-height: 79px;
      }
    }
  }

  @media only screen and (max-width: 374px) {
		.form {
      textarea {
        height: 102px;
        min-height: 102px;
      }
    }
  }
</style>
